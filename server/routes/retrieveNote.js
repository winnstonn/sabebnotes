const getNote = (username, db) => {
	var dbo = db.db("sabebnotes");
	dbo.collection("Note").find({'user':username}).toArray(function(err, result) {
    if (err) {
		return {'respon':'Bad', 'res': null};
    }
	else {
		console.log("Here are documents");
		return {'respon': 'Good', 'res':result};
    }
	db.close();
  });
}

module.exports = {
	function(req, res, db) {
		res = getNote(req.body.username, db);
		return res;
    }
}