$(function() {

 	// User Object
	var User = {
		handle: '@bradwestfall',
		img: 'brad.png'
	}

	// Handlebars compile variables for each templating function
	var templTweet = Handlebars.compile($('#template-tweet').html());
	var templCompose = Handlebars.compile($('#template-compose').html());
	var templThread = Handlebars.compile($('#template-thread').html());

	// Render Tweet
	var renderTweet = function(User, message) {
		return templTweet({
			message: message,
			img: User.img,
			handle: User.handle
		});
	}

	// Render Thread
	var renderThread = function(User, message) {
		return templThread({
			tweet: renderTweet(User, message),
			compose: templCompose()
		});
	}

	// Expand Compose Textarea
	$('main').on('click', '.compose textarea', function() {
		$(this).parents('.compose').addClass('expand');

		// Extra credit: character count decrement
		var count = $(this).parent().find('.count')
		$(this).keyup(function(event){
			count.html(140 - this.value.length)
			if(count.html() <= "0"){
				count.css('color', 'red')
			}
		})
	});

	// Expand Tweet
	$('.tweets').on('click', '.thread > .tweet', function() {
		$(this).parents('.thread').toggleClass('expand');
	});

	// Compose Tweet
	$('main').on('submit', '.compose', function(e) {
		e.preventDefault();
		var textarea = $(this).find('textarea');
		var message = textarea.val();

		// Compose
		if ($(this).parent().hasClass('replies')) {
			var tweet = renderTweet(User, message);
			$(this).parent().append(tweet);
		} else {
			var thread = renderThread(User, message);
			$('.tweets').append(thread);
		}

		// Reset Compose
		textarea.val('');
		$(this).removeClass('expand');

	});

	// $('main').on('keypress', 'textarea', function(){

	// })

});
