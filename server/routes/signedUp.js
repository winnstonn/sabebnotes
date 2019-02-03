const checkUniquenessOfUsername = (username, db) => {
	const obj = {
		"username": username
	};
	db.collection("User").findOne(obj, function (err, res) {
		console.log(res);
		if (res === null) {
			console.log('username is unique');
			return true;
		} else {
			return false;
		}
	});
}

const signUpUser = (fname, lname, username, password, addr, email, arrNote, db) => {
	var obj = {
		"username": username,
		"password": password,
		"fname": fname,
		"lname": lname,
		"email": email,
		"addr": addr,
		"arrNote": arrNote
	};
	const usernameIsUnique = checkUniquenessOfUsername(username, db);
	if (usernameIsUnique) {
		db.collection("User").insertOne(obj, function (err, res) {
			if (err) {
				console.log("ada error");
				console.log(err);
				return 'error';
			} else {
				console.log("1 document inserted");
				return 'success';
			}
		});
	} else {
		return 'failed';
	}
}

module.exports = {
	signup: (req, res, db) => {
		const response = signUpUser(req.body.fname, req.body.laname, req.body.username, req.body.password, req.body.addr, req.body.email,
			req.body.arrayNote, db);
		if (response === 'success') {
			return res.json({
				response: "200 OK",
				status: 'success'
			});
		} else if (response === 'failed') {
			return res.json({
				response: "200 OK",
				status: 'failed'
			});
		} else {
			return res.json({
				response: "200 OK",
				status: 'error'
			});
		}
	}
}