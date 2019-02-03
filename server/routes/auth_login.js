const userExistInDatabase = async (username, password, db, res) => {
	var query = {'username': username, 'password': password};
	return db.collection("User").findOne(query, function(err, result) {
    if (err) {
		throw err;
	}
	else {
		console.log(result);
        if (result !== null) {
		    console.log("Found yes");
            return res.json({
						response: "200 OK",
						data: 'sukses'
					});
        } else {
            return res.json({
						response: "200 OK",
						data: 'error'
					});
        }
    }
  });
}

module.exports = {
    login:(req, res, db) => {
        userExistInDatabase(req.body.username, req.body.password, db,res);
    }
}