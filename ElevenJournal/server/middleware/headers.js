//module.exports allows us to use this in another file.
module.exports = function (req, res, next) {
    res.header('access-control-allow-origin', '*');
    res.header('acess-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
}