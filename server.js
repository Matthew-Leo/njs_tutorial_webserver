/*
 * CONSTANTS
 */
var PORT = 5000;
var PUBLIC_DIR = __dirname + "/public";

/*
 * IMPORTS
 */
var express = require('express');
var middleware = require('./middleware');


/*
 * Set up app options.
 */
var app = express();
app.use(middleware.logger);
app.enable('trust proxy');

/*
 * Set up ROUTES
 */
app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send("About Us: We are cool.");
})

app.use(express.static(PUBLIC_DIR));

app.listen(PORT, function () {
    console.log("Express started on port " + PORT + "; default dir:" + PUBLIC_DIR);
});