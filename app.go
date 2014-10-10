package app

import "net/http"
import "appengine"
import . "flotilla"

var data = struct {
  Styles   []string
  Scripts  []string
} {
  Styles:  []string{"build/build.css"},
  Scripts: []string{"build/build.js"},
}

func init() {
  if appengine.IsDevAppServer() {
    data.Styles  = []string{"lib/*.css", "src/*.css"}
    data.Scripts = []string{"lib/*.js",  "src/*.js"}
  }
  Handle("/").Index(index).Get(get).Options(OK)
}

func index(r *http.Request) {
  Template(StatusOK, "src/index.html", data)
}

func get(r *http.Request) {
  Status(StatusNotFound)
}
