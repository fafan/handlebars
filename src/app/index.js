require('../lib/jquery.min.js')
require('../lib/underscore.min.js')
require('../lib/backbone.min.js')

require("./index.html")
require("./index.css")

$(document).ready(function($){
  document.title = 'Handlebars Application'
  var Router = require('./router.js')
  new Router()
  Backbone.history.start()
})
