var routeHandler = function (args) {
    ValidateArgs();

    var _pagesDir = "./templates/";
    var app = args.app;
    var fs = args.fs;

    this.initRoutes = function () {
        //Set Routes for the application
        app.get("/", function (reqeust, response) {
            fs.readFile(_pagesDir + "index.html", function (err, data) {
                SendPage(response, data);
            });
        });

        app.get("/test", function (request, response) {
            response.render("index", { title: "hay", message: "Hello There" });
        });
    };

    //private functions
    function SendPage(response, data) {
        CreatePageHeaders(response);
        response.write(data);
        response.end();
    }

    function CreatePageHeaders(response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
    }

    function ValidateArgs() {
        if (args.app == null) {
            throw "ERROR: routeHandler express module required";
        }

        if (args.fs == null) {
            throw "ERROR: routeHandler fs module required";
        }
    }
};

//Export the module
module.exports = function (fs) {
    var handler = new routeHandler(fs);

    return handler;
};
