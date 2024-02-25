const { pool } = require('../db.js');
const getAllTransactions = (req, res) => {
    let { price, page } = req.query;
    // base query to fetch all transacttions
    let query = 'SELECT * FROM transactions ';
    let array = [];

    // if the price has value then add to query else add from page limit
    if (price) {
        query += 'WHERE price <=$1 ';
        array.push(price);
        if (!page) {
            page = 1;
        }
        query += 'ORDER BY id ';
        query += 'LIMIT $2 OFFSET $3';
    } else {
        if (!page) {
            page = 1;
        }
        query += 'ORDER BY id ';
        query += 'LIMIT $1 OFFSET $2 ';
    }
    array.push(10);
    array.push(page * 10);

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
