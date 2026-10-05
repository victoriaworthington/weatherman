package weather

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"time"
)

type Client struct {
	baseUrl    url.URL
	httpClient *http.Client
}

func newClient(timeout time.Duration) *Client {
	client := &http.Client{
		Timeout: timeout,
	}

	return &Client{
		baseUrl: url.URL{
			Scheme: "https",
			Host:   "api.open-meteo.com",
			Path:   "/v1/",
		},
		httpClient: client,
	}
}

func GetWeather(ctx context.Context, latitude string, longitude string) (*Forecast, error) {
	c := newClient(15 * time.Second)

	u := c.baseUrl.JoinPath("forecast")

	q := u.Query()
	q.Set("latitude", latitude)
	q.Set("longitude", longitude)

	q.Set("hourly", "temperature_2m,rain,cloud_cover,relative_humidity_2m,snowfall,wind_direction_10m,wind_speed_10m")
	u.RawQuery = q.Encode()

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, u.String(), nil)
	if err != nil {
		fmt.Println("Error:", err)
		return nil, err
	}

	resp, err := c.httpClient.Do(req)
	if err != nil {
		fmt.Println("Error:", err)
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Println("Got a bad HTTP code: ", resp.StatusCode)
		return nil, err
	}

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error:", err)
		return nil, err
	}

	var f Forecast
	err = json.Unmarshal(bodyBytes, &f)
	if err != nil {
		return nil, err
	}
	return &f, nil
}
