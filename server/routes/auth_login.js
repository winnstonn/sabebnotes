const userExistInDatabase = (username, password, db) => {
	var dbo = db.db("sabebnotes");
	var query = {usernamee: username};
	dbo.collection("User").findOne(query, function(err, result) {
    if (err) {
		throw err;
	}
	else {
		console.log("Found yes");
		return true;
    }
	db.close();
  });
}

module.exports = {
    function(req, res, db) {
        if (userExistInDatabase(req.body.username, req.body.password, db) == true)
            return {response: '200 OK', authorized: true};
        else
            return {response: '200 OK', authorized: false};
    }
}