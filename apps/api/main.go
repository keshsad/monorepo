package main

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/awslabs/aws-lambda-go-api-proxy/httpadapter"
)

func respondWithJSON(w http.ResponseWriter, statusCode int, payload any) {
	encoder := json.NewEncoder(w)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	encoder.Encode(payload)
}

func router() *http.ServeMux {
	mux := http.NewServeMux()

	// api test
	mux.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		respondWithJSON(w, http.StatusOK, map[string]string{"message": "Hello World"})
	})

	// api root
	mux.HandleFunc("/{$}", func(w http.ResponseWriter, r *http.Request) {
		respondWithJSON(w, http.StatusOK, map[string]string{
			"message": "API Home",
			"time":    time.Now().String(),
		})
	})

	// default
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		respondWithJSON(w, http.StatusNotFound, map[string]string{"message": "Not Found"})
	})

	return mux
}

func main() {
	lambda.Start(httpadapter.NewV2(router()).ProxyWithContext)
}
