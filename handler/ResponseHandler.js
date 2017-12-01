var OKAY = 200;
var BAD_REQUEST = 400;
var UN_AUTHORIZED = 401;
var FORBIDDEN = 403;
var NOT_FOUND = 404;
var INTERNAL_ERROR = 500;

var sendOkay = function (response, result) {
    response.status(OKAY).json(result);
};

var sendError = function (response, result) {
    response.status(INTERNAL_ERROR).json(result);
};
module.exports = {
    sendOkay: sendOkay,
    sendError: sendError
}
