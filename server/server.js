var express = require('express');
var bodyParser = require('body-parser');
var Twitter = require('twitter');
var app = express();


// headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// to use body-parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// twitter keys
var client = new Twitter({
  consumer_key: 'Tj2ABAiMJLw4TiC0YpTEBUsZa',
  consumer_secret: '2huxxFtqTmr0JSzhG8xMfslo8NpUShk5XQxQhT8oUZ3AinbDEY',
  access_token_key: '3033438801-SvulR13OoPlhuxligw4yVRusdMa85z69PolUXQv',
  access_token_secret: 'yBQKm6Ja60o9KY7IcF5CsrHETzRZEdEudyNTIot3OqlSz'
});
 
// twitter get request
function clientTweets(params, res){
	client.get('statuses/user_timeline', params, function(error, tweets, response){
	if (!error){
		res.send(tweets);
	}

	});
}


app.get('/', function (req, res) {
	// console.log(req.query); //{user_name: ''}
	clientTweets(req.query, res);

  // res.send();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
