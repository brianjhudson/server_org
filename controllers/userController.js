const db = require('../db.js')

module.exports = {
    getUsers: function(req, res, next) {
        db.get_users(function(err, users) {
            if (err) next(err)
            return res.status(200).json(users)
        })
    },
    postUser: function(req, res, next) {
        db.post_user([req.body.name, req.body.email], function(err, newUser) {
            if (err) next(err)
            return res.status(200).json(newUser)
        })
    }
}