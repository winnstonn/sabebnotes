const checkUniquenessOfUsername = (username, db) => {
	const obj = {"username": username};
	db.collection("User").findOne(obj, function(err, res) {
    if (err) {
		console.log("ada errorr uyyy");
		throw err;
    }
	else {
		if (res === null) {
			console.log('username is unique');
			return true;
		} else {
			return false;
		}
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
		"arrNote":arrNote
	};
	const usernameIsUnique = checkUniquenessOfUsername(username, db);
	console.log(usernameIsUnique);
	if (usernameIsUnique === "") {
		console.log("masuk kesini unik");
		db.collection("User").insertOne(obj, function (err, res) {
			if (err) {
				console.log("ada error");
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
	signup: (req, res, db) => {
		const response = signUpUser(req.body.fname, req.body.laname, req.body.username, req.body.password, req.body.addr, req.body.email,
		req.body.arrayNote, db);
		if (response) {
			return res.json({response: "200 OK", success: true});
		}
		else {
			return res.json({response:"200 OK", success: false});
		}
	}
}