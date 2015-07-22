var Backbone = require('backbone');
var Handlebars = require('hbsfy/runtime');
var listUsersTemplate = require('../templates/listUsers.handlebars');
var $ = require('jquery');
Backbone.$ = $;


/****************************************
  App
*****************************************/

var App = require('../App');
App.Collections.User = require('../collections/User');


/****************************************
  View: List Users
*****************************************/

var ListUsers = Backbone.View.extend({
    el: $("main"),
    initialize: function() {
        this.render();
    },
    render: function() {
        var self = this;

        // Start a User Collection
        var userCollection = new App.Collections.User();

        // Fetch Collection from Server
        userCollection.fetch().done(function() {

            // Kevin I suppose you know a better way to pass a collection
            // to handlebars
            var output = listUsersTemplate(userCollection.models);
            self.$el.html(output);

        });
        
    }
});

module.exports = ListUsers;