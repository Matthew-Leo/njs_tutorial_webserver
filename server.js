/*
 * CONSTANTS
 */
var PORT = 5000;
var PUBLIC_DIR = __dirname + "/public";

/*
 * IMPORTS
 */
var express = require('express');
var app = express();

/*
 * OTHER GLOBALS
 */

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log("Private route picked " + req.originalUrl + " " + JSON.stringify(req.query));
        next();
    },
    logger: function(req,res,next) {
//        var ip = req.headers['x-forwarded-for'] || 
//     req.connection.remoteAddress || 
//     req.socket.remoteAddress ||
//     req.connection.socket.remoteAddress;
        var date = new Date();
        console.log(date.toLocaleDateString() + " " + date.toLocaleTimeString() + " " + req.ip + " " + req.method + " " + req.originalUrl);
        next();
    }
}

app.use(middleware.logger);
app.enable('trust proxy');

/*
 * ROUTES
 */
app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send("About Us: We are cool");
})

app.use(express.static(PUBLIC_DIR));

app.listen(PORT, function () {
    console.log("Express started on port " + PORT + "; default dir:" + PUBLIC_DIR);
});