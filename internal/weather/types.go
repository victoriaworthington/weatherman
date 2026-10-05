package weather

type Forecast struct {
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
	Elevation float64 `json:"elevation"`
	Timezone  string  `json:"timezone"`
	Hourly    Hourly  `json:"hourly"`
}

type Hourly struct {
	Time               []string  `json:"time"`
	Temperature2m      []float64 `json:"temperature_2m"`
	Rain               []float64 `json:"rain"`
	CloudCover         []float64 `json:"cloud_cover"`
	RelativeHumidity2m []float64 `json:"relative_humidity_2m"`
	Snowfall           []float64 `json:"snowfall"`
	WindDirection10m   []float64 `json:"wind_direction_10m"`
	WindSpeed10m       []float64 `json:"wind_speed_10m"`
}
