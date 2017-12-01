"use strict";

const SELF = "editor/testRoute1";

module.exports = (req, res) => {
    console.log("...2");
    responseHandler.sendOkay(res, "testRoute 2");
}
