const checkUniquenessOfUsername = (username, db) => {
	const obj = {username: username};
	db.collection("User").findOne(obj, function(err, res) {
    if (err) {
		throw err;
    }
	else {
		if (res == {}) {
			console.log('username is unique');
			console.log(res);
			return true;
		} else {
			return false;
		}
    }
	});
}

const signUpUser = (fname, lname, username, password, addr, email, note, db) => {
	var obj = {
		'username': username,
		'password': password,
		'fname': fname,
		'lname': lname,
		'email': email,
		'addr': addr, 
		'arrNote':note
	};
	const usernameIsUnique = checkUniquenessOfUsername(username, db);
	if (usernameIsUnique) {

		db.collection("User").insertOne(obj, function (err, res) {
			if (err) {
				console.log(err);
				return false;
			} else {
				console.log("1 document inserted");
				return true;
			}
		});
	} else {
		return false;
	}
}

module.exports = {
	function(req, res, db) {
		const response = signUpUser(req.body.fname, req.body.lname, req.body.username, req.body.password, req.body.addr, req.body.email,
		req.body.note, db)
		if (response) {
			return res.json({response: "200 OK", success: true});
		}
		else {
			return res.json({response:"200 OK", success: false});
		}
	}
}