var routeHandler = function (app, fs) {

    this.initRoutes = function () {
        //Set Routes for the application
        app.get("/", function (req, res) {
            res.render("home");
        });
        
        app.get("/test",function(req,res){
           res.render("test"); 
        });
    };

};

//Export the module
module.exports = function (app, fs) {
    var handler = new routeHandler(app, fs);

    return handler;
};
