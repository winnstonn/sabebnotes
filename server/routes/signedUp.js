const signedUp = (fname, lname, username, password, addr, email, db) => {
	var dbo = db.db("sabebnotes");
	var obj = {'first':fname, 'last':lname, 'user': username, 'pass': password, 'address': addr, 'email':email};
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

module.exports = {
	function(req, res, db) {
		if (signedUp(req.body.fname, req.body.lname, req.body.username, req.body.password, req.body.addr, req.body.email, db) == true) {
			return {response: "inserted fine"};
		}
		else {
			return {response:"Something wrong in regis"};
		}
	}
}