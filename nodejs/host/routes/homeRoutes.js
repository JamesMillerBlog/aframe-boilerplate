const path = require('path');

module.exports = (app, express) => {
	app.get('/', function(req, res) {
			res.sendFile('index.html');
	});
}
