var express = require('express');
var cookieParser = require('cookie-parser');
var ab = require('express-ab')({ cookie: false });

global.responseHandler = require('./handler/ResponseHandler');

var app = express();
app.use(cookieParser());

var myPageTest = ab.test('my-fancy-test');

app.get(
    '/',
    myPageTest(null, 0.5),
    require('./api/testRoute1'));

app.get('/',
    myPageTest(null, 0.5),
    require('./api/testRoute2'));

app.listen(8080);