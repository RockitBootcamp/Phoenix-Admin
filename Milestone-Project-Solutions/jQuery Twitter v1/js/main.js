$(function() {

	/**
	 * User Object
	 */
	var User = {
		handle: '@bradwestfall',
		img: 'brad.png'
	}

	/**
	 * Render Tweet
	 */
	var renderTweet = function(User, message) {
		var template = Handlebars.compile($('#template-tweet').html());
		return template({
			message: message,
			img: User.img,
			handle: User.handle
		});
	}

	/**
	 * Render Compose
	 */
	var renderCompose = function() {
		var template = Handlebars.compile($('#template-compose').html());
		return template();
	}

	/**
	 * Render Thread
	 */
	var renderThread = function(User, message) {
		var template = Handlebars.compile($('#template-thread').html());
		return template({
			tweet: renderTweet(User, message),
			compose: renderCompose()
		});
	}

	/**
	 * Expand Compose Textarea
	 */
	$('main').on('click', '.compose textarea', function() {
		$(this).parents('.compose').addClass('expand');
	});

	/**
	 * Expand Tweet
	 */
	$('.tweets').on('click', '.thread > .tweet', function() {
		$(this).parents('.thread').toggleClass('expand');
	});

	/**
	 * Compose Tweet
	 */
	$('main').on('click', '.compose button', function(e) {
		e.preventDefault();
		var textarea = $(this).parents('form').find('textarea');
		var message = textarea.val();
		
		// Compose
		if ($(this).parents('.tweets').length) {
			var tweet = renderTweet(User, message);
			$(this).parents('.replies').append(tweet);
		} else {
			var thread = renderThread(User, message);
			$('.tweets').append(thread);
		}

		// Reset Compose
		textarea.val('');
		$(this).parents('.compose').removeClass('expand');

	});

});