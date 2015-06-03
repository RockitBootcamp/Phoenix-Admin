'use strict';

var $ = require('jquery');
var _ = require('lodash');
var template = require('./template');

var apiServer = 'http://localhost:3000';

var currentUser = {
  handle: '@bradwestfall',
  img: 'brad.png',
  id: 1
};

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

function getUsers() {
  return $.getJSON(apiServer + '/users');
}

$(function () {

  var $mainContainer = $('#main');
  var $tweetsContainer = $('#tweets');

  getTweets().then(function (tweets) {
    getUsers().then(function (users) {
        tweets.forEach(function (tweet) {
          tweet.user = _.findWhere(users, { id: tweet.userId });

          var thread = template.renderThread(tweet);

          $tweetsContainer.append(thread);
        });
    });
  });

  // Expand Compose Textarea
  $mainContainer.on('click', '.compose textarea', function () {
    $(this).parents('.compose').addClass('expand');
  });

  // Expand Tweet
  $mainContainer.on('click', '.thread > .tweet', function () {
    var $this = $(this);
    var $thread = $this.parents('.thread');
    var $replies = $thread.find('.replies');
    var threadId = $thread.find('.tweet')
      .attr('id')
      .split('-')[1];

    $replies.find('.tweet').remove();

    getReplies(threadId, function (replies) {
      var replies = $(template.renderReplies(replies))
        .appendTo($replies);

      $thread.toggleClass('expand');
    });
  });

  // Compose Tweet
  $mainContainer.on('click', '.compose button', function () {
    var $this = $(this);
    var isReply = !!$this.parents('.replies').length;
    var $textarea = $this.parents('form').find('textarea');
    var message = $textarea.val();

    // Compose
    if (isReply) {
      var tweet = template.renderTweet(currentUser, message);

      $this.parents('.replies').append(tweet);
    } else {
      var thread = template.renderThread({
        user: currentUser,
        message: message
      });

      $tweetsContainer.append(thread);
    }

    // Reset Compose
    $textarea.val('');
    $this.parents('.compose').removeClass('expand');

    // POST new tweet to server
    var newTweet = {
      userId: currentUser.id,
      message: message
    };

    if (isReply) {
      var parentTweetId = parseInt($this.parents('.thread.expand')
        .children('.tweet')
        .attr('id')
        .split('-')[1], 10);

      newTweet.tweetId = parentTweetId;

      postReply(newTweet).then(function (data) {
        console.log('new reply', data);
      });
    } else {
      postTweet(newTweet).then(function (data) {
        console.log('new tweet', data);
      });
    }

    return false;
  });

});
