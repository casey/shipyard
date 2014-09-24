package app

import "net/http"
import . "flotilla"

var html = `<tt>
  <a href="https://github.com/casey/shipyard">shipyard</a> for the
  <a href="https://github.com/casey/flotilla">flotilla</a>
</tt>`

func init() {
  Handle("/").Index(index).Default(handler)
}

func index(r *http.Request) {
  Body(http.StatusOK, html, "text/html; charset=utf-8")
}

func handler(r *http.Request) {
  Body(http.StatusOK, "Hi!\n", "text/plain; charset=utf-8")
}
