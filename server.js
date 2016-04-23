//Modules
//Vendor Modules
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var http = require("http").Server(app);
var fs = require("fs");
//Custom Modules
var controllers = require("./modules/controllers");
var ntepace = require("ntepace")(fs, app, {
    template: "./pages/layout/_layout.html",
    viewDir: "./pages/views/",
    controllers: controllers
});

//Register Middleware
app.use(function (req, res, next) {
    console.log("custom middleware ");
    next();
});
app.use(express.static("./pages/static/images/"));
app.use(express.static("./pages/static/css/"));
app.use(express.static("./pages/static/js/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ntepace.routeHandler);

//set configurations
var connectionConfig = {
    port: 8088
};

//Start server
http.listen(connectionConfig.port, function () {
    console.log("Server started on: http://localhost:%s", connectionConfig.port);
});