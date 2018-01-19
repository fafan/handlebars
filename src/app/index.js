require('../lib/jquery.min.js')
require('../lib/underscore.min.js')
require('../lib/backbone.min.js')


var indexTemplate = require("../template/index.handlebars")
indexTemplate({
  title: 'Handlebars Application'
})

var Router = require('./router.js')

$(document).ready(function($){
  new Router();
  Backbone.history.start();
});
