const addNote = (username, note, idNote, title, db) => {
	var dbo = db.db("sabebnotes");
	var obj = {user:username, nnote: note, id: idNote, judul: title};
	dbo.collection("User").insertOne(obj, function(err, res) {
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

/*const addNote = (req, res) => {
	var res = "";
}*/

module.exports = {
	function(req, res, db) {
        if (addNote(req.body.username, req.body.note, req.body.idNote, req.body.title) == true)
            return {response: 'Nice insert'};
        else
            return {response: 'opps, hit problem'};
    }
}