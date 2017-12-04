"use strict";

const cmd = require('node-cmd');

function saveFileToLocal(branch, pathToFile, cb) {
    //git show testBranch1:api/testRoute1.js > gitFiles/testBranch1_testRoute1.js
    var fileName = pathToFile.split("/");
    var cmdString = 'git show ' + branch + ':' + pathToFile + ' > gitFiles/' +
        branch + '_' + fileName[fileName.length - 1];
    console.log("cmdString:", cmdString);
    cmd.get(
        cmdString,
        function (err, data, stderr) {
            if (err) {
                cb(err);
            } else {
                const fileName = getGitABName(branch, pathToFile);
                cb(err, fileName);
            }
        }
    );
};

function getGitABName(branch, pathToFile) {
    var fileName = pathToFile.split("/");
    return './gitFiles/' + branch + '_' + fileName[fileName.length - 1];
};

module.exports = {
    saveFileToLocal,
    getGitABName
}