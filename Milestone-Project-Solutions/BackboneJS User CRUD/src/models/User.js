var Backbone = require('backbone');


/****************************************
  App
*****************************************/

var App = require('../App');


/****************************************
  Model: User
*****************************************/

var UserModel = Backbone.Model.extend({
    url: function() {
        var base = App.Settings.apiURL + '/users';
        if (this.isNew()) return base;
        return base + '/' + this.id
    }
});

module.exports = UserModel;