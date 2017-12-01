"use strict";

const SELF = "editor/testRoute1";

module.exports = (req, res) => {
    console.log(">>>1");
    responseHandler.sendOkay(res, "testRoute 1");
}
