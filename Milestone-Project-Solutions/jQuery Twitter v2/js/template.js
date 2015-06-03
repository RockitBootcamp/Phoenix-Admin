'use strict';

var $ = require('jquery');
var Handlebars = require('hbsfy/runtime');
var composeTmpl = require('../templates/compose.handlebars');
var repliesTmpl = require('../templates/replies.handlebars');
var tweetTmpl = require('../templates/tweet.handlebars');
var threadTmpl = require('../templates/thread.handlebars');

// Register partials
Handlebars.registerPartial('compose', composeTmpl);
Handlebars.registerPartial('replies', repliesTmpl);
Handlebars.registerPartial('tweet', tweetTmpl);

// Render Tweet
function renderTweet(user, message) {
  return tweetTmpl({
    user: user,
    message: message
  });
}

// Render Thread
function renderThread(details) {
  return threadTmpl(details);
};

function renderReplies(replies) {
  return repliesTmpl({ tweets: replies });
}

module.exports = {
  renderTweet: renderTweet,
  renderThread: renderThread,
  renderReplies: renderReplies
};
