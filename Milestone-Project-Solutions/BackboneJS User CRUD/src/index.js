var Backbone = require('backbone');

// App
var App = require('./app');
var UserFormView = require('./views/user-form');
App.Views.UserForm = new UserFormView;
var ListUsersView = require('./views/list-users');
App.Views.ListUsers  = new ListUsersView;
App.Collections.user = require('./collections/user')

// App Router
App.Router = Backbone.Router.extend({
  // Route definitions
  routes: {
    'user/add(/)': 'addUser',
    'user/:id/edit(/)': 'addUser',
    'user/:id/delete(/)': 'deleteUser',
    '': 'index',
    '*actions': 'defaultRoute'
  },

  // Route handlers

  index: function() {
    App.Views.ListUsers.render();
  },

  addUser: function(id) {
    App.Views.UserForm.render(id)
  },

  deleteUser: function(id) {
    var user = App.Collections.user.get(id);

    user.destroy().done(function (user) {
      App.router.navigate('/', { trigger: true })
    });
  },

  editUser: function(id) {
    console.log('Edit User ' + id);
    App.Views.EditUser.render(id);
  },

  defaultRoute: function(actions) {
    console.log('404');
  }
});

// Initiate the router
App.router = new App.Router;

Backbone.history.start();
