'use strict';

var $ = require('jquery');
var _ = require('lodash');

var apiServer = 'http://localhost:3000';

function getReplies(tweetId, cb) {
  return $.getJSON(apiServer + '/tweets/' + tweetId + '/replies', function (replies) {
    $.getJSON(apiServer + '/users', function (users) {
      var extendedReplies = replies.map(function (reply) {
        return _.assign({}, reply, {
          user: _.findWhere(users, { id: reply.userId })
        });
      });

      cb(extendedReplies);
    });
  });
}

function postReply(tweet) {
  return $.post(apiServer + '/replies', tweet);
}

function postTweet(tweet) {
  return $.post(apiServer + '/tweets', tweet);
}

function getTweets() {
  return $.getJSON(apiServer + '/tweets');
}

function getUserById(id) {
  return $.getJSON(apiServer + '/users/' + id);
}

module.exports = {
  getReplies: getReplies,
  postReply: postReply,
  getTweets: getTweets,
  postTweet: postTweet,
  getUserById: getUserById
}
