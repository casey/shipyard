package app

import "net/http"
import . "flotilla"

func init() {
  Handle("/").Default(func(r *http.Request) {
    Body(http.StatusOK, "Hi!\n", "text/plain; charset=utf-8")
  })
}
