var hapi = require("hapi");
var io = require("socket.io");

var server = new hapi.Server();

//set connection details
var connectionConfig = {
  port: 8088  
};

server.connection(connectionConfig);




//Start Server
server.start(function(err){
   if(err)
   {
       throw err;
   } 
   
   console.log("server started and running on %s",server.info.uri);
});