var Backbone = require('backbone');

// App
var App = require('./app');
App.Collections.User = require('./collections/user');

// View: User Form
var UserFormView = require('./views/user-form');
App.Views.UserForm = new UserFormView;

// View: List Users
var ListUsersView = require('./views/list-users');
App.Views.ListUsers  = new ListUsersView;

// App Router
App.Router = Backbone.Router.extend({

  // Route definitions
  routes: {
    '': 'index',
    'user/add(/)': 'addUser',
    'user/:id/edit(/)': 'addUser',
    'user/:id/delete(/)': 'deleteUser',
    '*actions': 'defaultRoute'
  },

  // Route handlers

  index: function() {
    App.Views.ListUsers.render();
  },

  addUser: function(id) {
    App.Views.UserForm.render(id)
  },

  editUser: function(id) {
    console.log('Edit User ' + id);
    App.Views.EditUser.render(id);
  },

  deleteUser: function(id) {
    var user = App.Collections.User.get(id);

    user.destroy().done(function (user) {
      App.router.navigate('/', { trigger: true })
    });
  },

  defaultRoute: function(actions) {
    console.log('404');
  }
});

// Initiate the router
App.router = new App.Router;

Backbone.history.start();
