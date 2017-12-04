var express = require('express');
var cookieParser = require('cookie-parser');
var ab = require('express-ab')({ cookie: false });

global.responseHandler = require('./handler/ResponseHandler');
global.gitABHandler = require('./handler/gitABHandler')

var app = express();
app.use(cookieParser());

var abTest = true;
var myPageTest = ab.test('my-fancy-test');

var branch = 'testBranch1';
var pathToFile = 'api/testRoute1.js';

gitABHandler.saveFileToLocal(branch, pathToFile, (err, file) => {
    if (err) {
        console.log(err);
    } else {
        app.get(
            '/',
            myPageTest(null, 0.4),
            require(file));
    }
});

app.get(
    '/',
    myPageTest(null, 0.3),
    require('./api/testRoute1'));

app.get('/',
    myPageTest(null, 0.3),
    require('./api/testRoute2'));

app.listen(8080);