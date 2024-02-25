const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');
const PORT = process.env.PORT || 8000;

const { createTransactionTable, pool } = require('./db.js');
const { getAllTransactions } = require('./controller/transactionController.js');
const { getStatisticsFromMonth } = require('./controller/statisticsController.js');
const { getPieData } = require('./controller/pieChartController.js');
const { getBarData } = require('./controller/barChartController.js');
const { default: axios } = require('axios');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/transactions', getAllTransactions);
app.get('/api/statistics', getStatisticsFromMonth);
app.get('/api/pie', getPieData);
app.get('/api/bar', getBarData);
app.get('/api/combined-data', async (req, res) => {
    try {
        let { month } = req.query;
        let statisticsUrl = process.env.BASE_URL + PORT + '/api/statistics';
        let pieUrl = process.env.BASE_URL + PORT + '/api/pie';
        let barUrl = process.env.BASE_URL + PORT + '/api/bar';
        if (month) {
            statisticsUrl += `?month=${month}`;
            pieUrl += `?month=${month}`;
            barUrl += `?month=${month}`;
        }
        const [apiResponse1, apiResponse2, apiResponse3] = await Promise.all([
            axios.get(statisticsUrl),
            axios.get(pieUrl),
            axios.get(barUrl),
        ]);

        const combinedData = {
            apiData1: apiResponse1.data,
            apiData2: apiResponse2.data,
            apiData3: apiResponse3.data,
        };
        res.status(200).json({ success: true, ...combinedData });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
});
pool.connect()
    .then((value) => {
        console.log('connection success \n ');
    })
    .catch((err) => console.log('rejected \n ', err));

/* RUN THIS COMMAND ONCE RUN 1st run   */

// function runTableQuery() {
//     try {
//         createTransactionTable();
//         console.log('end transaction..');
//     } catch (err) {
//         console.log('err in run table ,', err);
//     }
// }
// runTableQuery();

/* RUN THIS COMMAND ONCE RUN  2nd run */

// function addDataTOTable() {
//     fs.readFile('./data.json', 'utf-8', (error, data) => {
//         if (error) {
//             console.log('Error in json file');
//             return;
//         }
//         const Data = JSON.parse(data);

//         try {
//             Data.forEach((item) => {
//                 let { id, title, price, description, category, image, sold, dateOfSale } = item;
//                 price = JSON.parse(Number(price).toFixed(2));
//                 if (typeof price === 'string') {
//                     price = Number(price);
//                 }
//                 pool.query(
//                     `INSERT INTO transactions (id, title, price, description, category, image, sold, dateOfSale)
//             VALUES
//             ($1,$2,$3,$4,$5,$6,$7,$8);
//             `,
//                     [id, title, price, description, category, image, sold, dateOfSale]
//                 )
//                     .then(() => console.log(' data inserted successfull...'))
//                     .catch((err) => console.log('Error executing query:', err));
//             });
//             console.log('every transactions done .....');
//         } catch (err) {
//             console.log('err**', err.message);
//         }
//     });
// }
// addDataTOTable();

app.listen(PORT, () => console.log('Server is running on Port :', PORT));
