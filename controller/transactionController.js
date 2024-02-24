const { pool } = require('../db.js');
const getAllTransactions = (req, res) => {
    let price = req.query.price;
    let query = 'SELECT * FROM transactions ';
    let array = [];
    if (price) {
        query += 'WHERE price <=$1';
        array.push(price);
    }
    // `SELECT * FROM transactions WHERE price =$1`
    pool.query(query, array, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).json({ message: err.message, success: false });
            return;
        }

        res.status(200).json({ message: result.rows, success: true });
    });
};

module.exports = {
    getAllTransactions,
};
