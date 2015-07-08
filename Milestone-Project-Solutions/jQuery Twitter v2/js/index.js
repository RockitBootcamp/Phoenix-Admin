'use strict';

var $ = require('jquery');
var _ = require('lodash');
var template = require('./template');
var api = require('./api');

var currentUser = {
  handle: '@bradwestfall',
  img: 'images/brad.png',
  id: 1
};

$(function () {

  var $mainContainer = $('#main');
  var $tweetsContainer = $('#tweets');

  api.getTweets().then(function (tweets) {
    tweets.forEach(function (tweet) {
      api.getUserById(tweet.userId).then(function (user) {
        tweet.user = user;

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

    api.getReplies(threadId, function (replies) {
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

      api.postReply(newTweet).then(function (data) {
        console.log('new reply', data);
      });
    } else {
      api.postTweet(newTweet).then(function (data) {
        console.log('new tweet', data);
      });
    }

    return false;
  });

});
