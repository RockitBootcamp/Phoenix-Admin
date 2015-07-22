var Backbone = require('backbone');

/****************************************
  App
*****************************************/

var App = require('./App');
App.Views.AddUser = require('./views/AddUser');
App.Views.ListUsers  = require('./views/ListUsers');


/****************************************
  Router
*****************************************/

App.Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'user/add/': 'addUser',
        'user/:id/edit/': 'editUser',
        'user/:id/delete/': 'deleteUser',
        '*actions': 'default'
    }
});

// Initiate the router
App.router = new App.Router;


/****************************************
  Controllers
*****************************************/

App.router.on('route:index', function() {
    var listUsers = new App.Views.ListUsers();
});

App.router.on('route:addUser', function() {
    var addUser = new App.Views.AddUser();
});

App.router.on('route:deleteUser', function(id) {
    console.log('Delete User ' + id);
});

App.router.on('route:editUser', function(id) {
    console.log('Edit User ' + id);
});

App.router.on('route:default', function(actions) {
    console.log('404');
});


/****************************************
  Backbone History
*****************************************/

Backbone.history.start();