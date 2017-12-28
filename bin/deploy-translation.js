#! /usr/bin/env node
var doctoc = require("doctoc");
var shell = require("shelljs");
var glob = require("glob");

/*
    Generate menu for all ReadMe with DocToc
 */
glob("./README*.md", function (er, files) {
    files.forEach(function (item) {
        shell.exec("doctoc " + item + " --github");
    })
});