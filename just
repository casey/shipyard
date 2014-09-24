serve:
	goapp serve .

deploy:
	appcfg.py --oauth2 update .

format:
	@gofmt -w *.go
	@for file in *.go; do expand -t 2 $$file > tmp.go && mv tmp.go $$file; done

lint:
	@go vet
	@golint | sed -E "/don't use underscores|should not use dot imports/d"

test:
	./test http://localhost:8080

test-deployed:
	./test http://rodarmor-shipyard.appspot.com
