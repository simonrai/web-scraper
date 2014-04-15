var fs = require('fs')
var cheerio = require('cheerio')
var request = require('request')
var http = require('http')

url = 'http://substack.net/images/'

var get = http.get(url, function (res) {
	console.log("Page Contents: " + res.statusCode)
}).on('error', function(e) {
	console.log("Error: " + e.message)
})