var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../templates/user-form.hbs');


/****************************************
  App
*****************************************/

var App = require('../app');
var User = require('../models/user');

/****************************************
  View: Add User
*****************************************/

var AddUser = Backbone.View.extend({
  el: $("main"),

  initialize: function () {
  },

  render: function (userId) {
    var _this = this;
    this.editMode = !!userId;

    if (this.editMode) {
      var user = this.user = new User({ id: userId });

      user.fetch().done(function () {
        var output = formTemplate(user.toJSON());
        _this.$el.html(output);
      })
    } else {
      var output = formTemplate();
      this.$el.html(output);
    }
  },

  events: {
    "submit form": "submitForm"
  },

  submitForm: function () {
    // Collect Form Data
    var formData = {
      name: $('form').find('input[name="name"]').val(),
      hobby: $('form').find('input[name="hobby"]').val(),
      // this is just something fun for me ;)
      img: 'http://robohash.org/'+ Date.now().toString(16) + '.png'
    };

    if (this.editMode) {
      this.user.set(formData);
      this.user.save().done(function () {
        App.router.navigate('/', { trigger: true });
      })
    } else {
    // Save new user
      App.Collections.user.create(formData, {
        success: function (user) {
          App.router.navigate('/', { trigger: true });
        }
      });
    }

    // Prevent Default
    return false;
  }
});

module.exports = AddUser;
