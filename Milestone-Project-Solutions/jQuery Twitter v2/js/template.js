'use strict';

var Handlebars = require('hbsfy/runtime');
var composeTmpl = require('../templates/compose.handlebars');
var repliesTmpl = require('../templates/replies.handlebars');
var tweetTmpl = require('../templates/tweet.handlebars');
var threadTmpl = require('../templates/thread.handlebars');

// Register partials
// best case: use partials, otherwise they can just use jQuery to combine the
// templates together
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

function renderReplies(replies) {
  return repliesTmpl({ tweets: replies });
}

module.exports = {
  renderTweet: renderTweet,
  renderThread: threadTmpl,
  renderReplies: renderReplies
};
