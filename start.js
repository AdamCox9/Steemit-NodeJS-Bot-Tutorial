var steem = require('steem');
var username = 'ENTER_USERNAME_HERE';
var password = 'ENTER_PASSWORD_HERE'; 

var wif = steem.auth.toWif(username, password, 'posting');
steem.broadcast.vote(wif, username, 'money-dreamer', 'creating-first-steemit-bot', 10000, function(err, result) {
    console.log(err, result);
});