const addNote = (username, note, idNote, title, db) => {
	var dbo = db.db("sabebnotes");
	var obj = {'user':username, 'note': note, 'id': idNote, 'judul': title};
	dbo.collection("Note").insertOne(obj, function(err, res) {
    if (err) {
		throw err;
    }
	else {
		console.log("1 document inserted");
		return true;
    }
	db.close();
  });
}

module.exports = {
	function(req, res, db) {
        if (addNote(req.body.username, req.body.note, req.body.idNote, req.body.title, db) == true)
            return {response: 'Nice insert'};
        else
            return {response: 'opps, hit problem'};
    }
}