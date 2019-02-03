
const signUpUser = async (fname, lname, username, password, addr, email, arrNote, db, res) => {
	var obj = {
		"username": username,
		"password": password,
		"fname": fname,
		"lname": lname,
		"email": email,
		"addr": addr,
		"arrNote": arrNote
	};
	db.collection("User").findOne({"username":username}, function (err, result) {
		console.log(result);
		if (result === null) {
			console.log('username is unique');
			return db.collection("User").insertOne(obj, function (err, result) {
				if (err) {
					console.log("ada error");
					console.log(err);
					return res.json({
						response: "200 OK",
						status: 'error'
					});
				} else {
					console.log("1 document inserted");
					return res.json({
						response: "200 OK",
						status: 'success'
					});
				}
			});
		} else {
			return res.json({
				response: "200 OK",
				status: 'failed'
			});
		}
	});

		
}

module.exports = {
	signup: (req, res, db) => {
		signUpUser(req.body.fname, req.body.lname, req.body.username, req.body.password, req.body.addr, req.body.email, req.body.arrayNote, db, res);
	}
}