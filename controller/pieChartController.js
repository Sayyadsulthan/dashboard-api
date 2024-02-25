const { pool } = require('../db.js');

const getPieData = async (req, res) => {
    try {
        let { month } = req.query;
        if (!month) month = 1;

        const categoryList = ['electronics', "women's clothing", 'jewelery', "men's clothing"];
        const query = `SELECT * FROM transactions WHERE category in($1) AND EXTRACT(MONTH FROM dateofsale)=$2; `;
        const xCategory = (await pool.query(query, [categoryList[0], month])).rows;
        const yCategory = (await pool.query(query, [categoryList[1], month])).rows;
        const zCategory = (await pool.query(query, [categoryList[3], month])).rows;
        res.status(200).json({
            message: `pie data from the month ${month}`,
            data: { xCategory: xCategory, yCategory: yCategory, zCategory: zCategory },
        });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
};

module.exports = {
    getPieData,
};
