const db = require('../db')

module.exports = {
    getProducts: function(req, res, next) {
        // Make a database call
        db.get_products(function(err, results) {
            if (err) next(err);
            return res.status(200).json(results);
        })
    },
    getProductById: function(req, res, next) {
        db.get_product_by_id(req.params.id, function(err, result) {
            if (err) next(err);
            return res.status(200).json(result)
        })
    }
}