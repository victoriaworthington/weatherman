package main

import (
	"context"
	"encoding/json"
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

	b, err := json.MarshalIndent(f, "", "  ")
	if err != nil {
		fmt.Println("error:", err)
		return
	}
	fmt.Println(string(b))
}
