.default: .app
.app: index.html

index.html: app.js index.pug
	pug -P -O $^
