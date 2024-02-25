const { pool } = require('../db.js');

const getBarData = async (req, res) => {
    try {
        let { month } = req.query;
        if (!month) month = 1;

        const priceRanges = [
            { min: 0, max: 100 },
            { min: 101, max: 200 },
            { min: 201, max: 300 },
            { min: 301, max: 400 },
            { min: 401, max: 500 },
            { min: 501, max: 600 },
            { min: 601, max: 700 },
            { min: 701, max: 800 },
            { min: 801, max: 900 },
            { min: 901, max: Number.MAX_SAFE_INTEGER }, // assuming there's no upper limit
        ];

        const data = (
            await pool.query(
                `SELECT price FROM transactions WHERE EXTRACT(MONTH FROM dateofsale)=$1`,
                [month]
            )
        ).rows;

        const priceFromRange = priceRanges.map((price) => {
            const filteredData = data.filter(
                (item) => item.price >= price.min && item.price <= price.max
            );
            return { min: price.min, max: price.max, totalItems: filteredData.length };
        });

        res.status(200).json({
            message: `the data of month ${month}`,
            data: priceFromRange,
            success: true,
        });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
};

module.exports = {
    getBarData,
};
