const userExistInDatabase = (username, password, db) => {

}




module.exports = 
    function(req, res, db) {
        if (userExistInDatabase(req.body.username, req.body.password, db) == true)
            return {response: '200 OK', authorized: true};
        else
            return {response: '200 OK', authorized: false};
    }
