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
};

module.exports = middleware;