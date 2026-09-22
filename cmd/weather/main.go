package main

import (
	"context"
	"fmt"
	"log"
	"weather/internal/weather"
)

// Wiring only, builds dependencies, calls things
func main() {
	ctx := context.Background()

	f, err := weather.GetWeather(ctx, "37.7749", "-122.4194")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("latitude", f.Latitude)
	fmt.Println("longitude", f.Longitude)
	fmt.Println("elevation", f.Elevation)
	fmt.Println("timezone", f.Timezone)
}
