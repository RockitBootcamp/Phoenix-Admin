'use strict';

var $ = require('jquery');
var template = require('./template');

$(function () {

  var $tweetsContainer = $('#main');

  // User Object
  var User = {
    handle: '@bradwestfall',
    img: 'brad.png'
  }

  // Expand Compose Textarea
  $tweetsContainer.on('click', '.compose textarea', function () {
    $(this).parents('.compose').addClass('expand');
  });

  // Expand Tweet
  $tweetsContainer.on('click', '.thread > .tweet', function () {
    $(this).parents('.thread').toggleClass('expand');
  });

  // Compose Tweet
  $tweetsContainer.on('click', '.compose button', function () {
    var $this = $(this);
    var $textarea = $this.parents('form').find('textarea');
    var message = $textarea.val();

    // Compose
    if ($this.parents('.tweets').length) {
      var tweet = template.renderTweet(User, message);

      $this.parents('.replies').append(tweet);
    } else {
      var thread = template.renderThread(User, message);

      $('.tweets').append(thread);
    }

    // Reset Compose
    $textarea.val('');
    $this.parents('.compose').removeClass('expand');

    return false;
  });

});
