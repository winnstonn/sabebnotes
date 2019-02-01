const userExistInDatabase = (username, password, db) => {
	var query = {'username': username, password: password};
	db.collection("User").findOne(query, function(err, result) {
    if (err) {
		throw err;
	}
	else {
        if (result !== {}) {
		    console.log("Found yes");
            return true;
        } else {
            return false;
        }
    }
  });
}

module.exports = {
    function(req, res, db) {
        if (userExistInDatabase(req.body.username, req.body.password, db) == true)
            return res.json({response: '200 OK', authorized: true});
        else
            return res.json({response: '200 OK', authorized: false});
    }
}