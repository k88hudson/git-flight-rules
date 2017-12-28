#! /usr/bin/env node
const doctoc = require("doctoc");
const shell = require("shelljs");
const glob = require("glob");

/*
    Generate menu for all ReadMe with DocToc
 */
glob("./README*.md", function (er, files) {
    files.forEach(function (item) {
        shell.exec("doctoc " + item + " --github");
    })
});
