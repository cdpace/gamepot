//Modules
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var fs = require("fs");
var rh = require("./modules/routeHandler.js")({ app: app, fs: fs });

//set configurations
var connectionConfig = {
    port: 8088
};


rh.initRoutes();

//Start server
http.listen(connectionConfig.port, function() {
    console.log("Server started on: http://localhost:%s", connectionConfig.port);
});