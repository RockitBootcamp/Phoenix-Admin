var Backbone = require('backbone');
var Handlebars = require('hbsfy/runtime');
var formTemplate = require('../templates/formUser.handlebars');
var $ = require('jquery');
Backbone.$ = $;


/****************************************
  App
*****************************************/

var App = require('../App');
App.Models.User = require('../models/User');


/****************************************
  View: Add User
*****************************************/

var AddUser = Backbone.View.extend({
    el: $("main"),
    initialize: function() {
        this.render();
    },
    render: function(){
        var output = formTemplate();
        this.$el.html(output);
    },
    events: {
        "submit form": "submitForm"
    },
    submitForm: function(e) {
        e.preventDefault();
        
        // Collect Form Data
        var formData = {};
        formData.name = $('form').find('input[name="name"]').val();
        formData.hobby = $('form').find('input[name="hobby"]').val();

        // Save new user
        var user = new App.Models.User(formData);
        user.save().done(function() {
            App.router.navigate('/', {trigger: true}); 
        });

    }
});

module.exports = AddUser;