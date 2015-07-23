var $ = require('jquery');
var Backbone = require('backbone');
var listUsersTemplate = require('../templates/list-users.hbs');

// App

var App = require('../app');
require('../collections/user');

// View: List Users

var ListUsers = Backbone.View.extend({
  el: $('main'),

  initialize: function () {
  },

  collection: App.Collections.user,

  render: function () {
    var _this = this;
    var userCollection = this.collection;

    // Fetch Collection from Server
    userCollection.fetch().done(function (users) {
      _this.$el.html(listUsersTemplate(users));
    });
  }
});

module.exports = ListUsers;
