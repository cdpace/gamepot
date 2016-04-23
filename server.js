//Modules
var bodyParser = require("body-parser");
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var fs = require("fs");

var controllers = {};

//Home Controller
controllers.HOME = {
    //Actions
    GET: {
        INDEX: function (args) {
            console.log("accessed get home/index action");
            return {
                viewName: "home",
                args: {}
            };
        },
        TEST: function (args) {
            console.log("accessing test action");
            return {
                viewName: "test",
                args: {}
            };
        }
    },
    POST: {
        INDEX: function (args) {
            console.log("accessed post home/index action");
        },
        TEST: function(args){
            console.log("accessed from post action");
            return {
                viewName: "test",
                args: {
                    name : args[0].name
                }
            };
        }
    }
};


var ntepace = require("ntepace")(fs, app, {
    template: "./pages/layout/_layout.html",
    viewDir: "./pages/views/",
    controllers: controllers
});

app.use(function (req, res, next) {
    console.log("custom middleware ");
    next();
});

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