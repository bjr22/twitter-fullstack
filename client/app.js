var app = {

	init: function(){
		$('#submit-btn').on('click', function(){
			var username = $('#username-input').val();

			// get request with username data
			app.getTweets(username);

			// clear out username field
			$('#username-input').val('');
			event.preventDefault();
		});
	},


	// make sure to pass in username data
	getTweets: function(user){
		$.ajax({
			url: "http://127.0.0.1:3000/",
			method: "GET",
			'content-type': "application/json",
			data: {screen_name: user, count: 25},
			success: function(data){
				app.displayTweets(data);
			},
			error: function(){
				console.log("error");
			}
		});

	},

	displayTweets: function(data){
		for (var i = 0; i < data.length; i++){
			$('#tweets-box').prepend('<div class="tweet">' + '<span class="username">' + data[i].user.screen_name + '</span>' + ': ' +data[i].text+ '</div>');
		}
	}


};