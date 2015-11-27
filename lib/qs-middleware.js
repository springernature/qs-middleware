'use strict';

var qs = require('qs');
var url = require('url');

module.exports = qsMiddleware;

function qsMiddleware(options) {
	return function(request, response, next) {
		request.query = qs.parse(url.parse(request.url).query, options);
		next();
	};
}
