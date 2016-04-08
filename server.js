var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

//set connection details
var connectionConfig = {
  port: 8088  
};


var rh = require("./modules/routeHandler.js")("Hello 1");
rh.test();





//Start server
http.listen(connectionConfig.port,function(){
   console.log("Server started on: http://localhost:%s",connectionConfig.port); 
});