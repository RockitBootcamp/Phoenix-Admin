'use strict';

var $ = require('jquery');
var Handlebars = require('handlebars');

// Render Compose
function renderCompose() {
  var template = Handlebars.compile($('#template-compose').html());
  return template();
};

// Render Tweet
function renderTweet(User, message) {
  var template = Handlebars.compile($('#template-tweet').html());
  return template({
    message: message,
    img: User.img,
    handle: User.handle
  });
};

// Render Thread
function renderThread(User, message) {
  var template = Handlebars.compile($('#template-thread').html());
  return template({
    tweet: renderTweet(User, message),
    compose: renderCompose()
  });
};

module.exports = {
  renderTweet: renderTweet,
  renderThread: renderThread
};
