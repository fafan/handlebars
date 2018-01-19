module.exports = function getBookListingAPI() {
	var ajax = require('./ajax.js')

	return ajax({
		api: {
			method: 'GET',
			baseurl: 'http://abcdefgh.com',
			root: '/v1',
			function: '/book/1',
			params: [],
			token: 'vu76R@OIQVYhlkYGHw90'
		},
		function() {
			// callback here
			
		}
	})
}
