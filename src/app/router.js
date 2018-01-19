require('../lib/jquery.min.js')
require('../lib/underscore.min.js')
require('../lib/backbone.min.js')

var router = module.exports = Backbone.Router.extend({
  routes: {
    'login': 'login',                     // #login
    'booklist': 'booklist',               // #booklist
    'search/:query': 'search',            // #search/keyword
    'search/:query/p:page': 'search'      // #search/keyword/p7
  },

  login: function() {
    $('body').html('help')
  },

  search: function(query, page) {
    $('body').html('search')
  },

  booklist: function(query, page) {
    $('body').html(require('../include/bookListing.js'))
  }
})
