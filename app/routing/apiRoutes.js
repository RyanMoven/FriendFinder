// Pull in required dependencies
var path = require("path");

// Import the list of friend entries
var friends = require("../data/friends.js");

// Export API routes
module.exports = function(app) {
	

	// Getting the friend inputs
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	// Posting new friends on list
	app.post("/api/friends", function(req, res) {
		// aquiring user input
		var userInput = req.body;
		
		var userResponses = userInput.scores;
		/
		var nameMatch = "";
		var imageMatch = "";
		var compatability = 100;
			}
// needs comparison under
};