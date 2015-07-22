var Backbone = require('backbone');


/****************************************
  App
*****************************************/

var App = require('../App');
App.Models.User = require('../models/User');


/****************************************
  Collection: User
*****************************************/

var UserCollection = Backbone.Collection.extend({
    url: App.Settings.apiURL + '/users',
    model: App.Models.User
});

module.exports = UserCollection;