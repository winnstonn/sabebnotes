const addNote = async (username, note, idNote, title, db) => {
	var obj = {"note": note, "id": idNote, "judul": title};
	db.collection("User").findOne({'username':username}, function(err, result) {
    if (err) {
		throw err;
	}
	else {
		var query = { $push: { "arrNote": obj }};
		return db.collection("User").update({ 'username':username },query, function(err, res) {
		if (err) {
			throw err;
		}
		else {
			var jsonRes = getNote(username, db);
			return res.json(jsonRes);
		}
      });
	}
   });
}
const getNote = (username, db) => {
	return db.collection("User").find({'username':username}).toArray(function(err, result) {
    if (err) {
		return {'respon':'Bad', 'res': null};
    }
	else {
		console.log("Here are documents");
		return {'respon': 'Good', 'res':result};
    }
  });
}

module.exports = {
	addnote: (req, res, db) => {
		addNote(req.body.username, req.body.note, req.body.idNote, req.body.title, db);
    }
}