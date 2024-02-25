const { pool } = require('../db.js');

const getStatisticsFromMonth = async (req, res) => {
    let { month } = req.query;
    // month will range between 1-12
    if (!month) {
        month = 1;
    }
    let totalSales = 0,
        totalSoldItem = 0,
        totalUnSoldItem = 0;
    try {
        // for getting the totalSales from the month selected
        const totalSalesData = await pool.query(
            `SELECT SUM(price) FROM transactions 
         WHERE EXTRACT(MONTH FROM dateofsale)= $1;`,
            [month]
        );
        totalSales = totalSalesData.rows[0].sum;

        // for getting the totalSoldItem from the month selected
        const totalSoldItemData = await pool.query(
            `SELECT COUNT(price) FROM transactions
        WHERE  sold='true' AND
        EXTRACT(MONTH FROM dateofsale)=$1 ;`,
            [month]
        );
        totalSoldItem = totalSoldItemData.rows[0].count;

        // for getting the totalUnSoldItem from the month selected
        const totalUnSoldItemData = await pool.query(
            `SELECT COUNT(price) FROM transactions
        WHERE  sold='false' AND
        EXTRACT(MONTH FROM dateofsale)=$1 ;`,
            [month]
        );
        totalUnSoldItem = totalUnSoldItemData.rows[0].count;

        res.status(200).json({
            message: `Data for the month: ${month}`,
            data: { totalSales, totalSoldItem, totalUnSoldItem },
            success: false,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message, success: false });
    }
};

module.exports = {
    getStatisticsFromMonth,
};
