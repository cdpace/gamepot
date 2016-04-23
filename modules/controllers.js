var controllers = {
    //Controllers
    HOME:{
        //GET Actions
        GET: {
           INDEX: function(args){
                return {
                    viewName: "home"
                }          
           }    
        }        
    }    
};


module.exports = controllers;