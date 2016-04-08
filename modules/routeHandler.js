var routeHandler = function(fs){
   if(fs == null){
       throw "ERROR: routeHandler fs module required";
   }
    
   this.test = function(){
    console.log("hello from routehandler val:%s",fs);
}; 
    
};


module.exports = function(fs){
  var handler = new routeHandler(fs);
  
  return handler;  
};