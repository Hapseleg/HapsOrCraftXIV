const XIVAPI = require('@xivapi/js')
var expressmodule = require('express');
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
// const xiv = new XIVAPI()

/**
 * @file `exporter.cjs`
 * (A CommonJS module exporting a default and named entity.)
 */

module.exports = function defaultCjsExport() { console.log('default cjs') };
module.exports.namedCjsExport = function namedCjsExport() {return new XIVAPI()};

module.exports.xivapi = function xivapi(private_key, language = 'en', snake_case = true) {
    return new XIVAPI({
        private_key: private_key,
        language: language,
        snake_case: snake_case
    })
}
module.exports.express = expressmodule
module.exports.bodyParser = bodyParser;
module.exports.exphbs = exphbs;


