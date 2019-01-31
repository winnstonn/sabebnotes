const config = require('./../serverConfig');

/*const addNote = (req, res) => {
	var res = "";
}*/

module.exports = {
	function(req, res) {
        if (req.body.username == 'user' && req.body.password == 'password')
            return {response: '200 OK', authorized: true};
        else
            return {response: '200 OK', authorized: false};
    }
}