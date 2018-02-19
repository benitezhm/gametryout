var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/hellophaser/index.html'));
});

app.use('/static/phaser', express.static(__dirname + '/node_modules/phaser-ce/build/'));
app.use('/img', express.static(__dirname + '/hellophaser/'));

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
