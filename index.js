const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const data = require('./data.json');
const { createTransactionTable, pool } = require('./db.js');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

pool.connect()
    .then((value) => {
        console.log('connection success \n ');
    })
    .catch((err) => console.log('rejected \n ', err));

/* RUN THIS COMMAND ONCE RUN  
// function runTableQuery() {
//     try {
//         createTransactionTable();
//         console.log('end transaction..');
//     } catch (err) {
//         console.log('err in run table ,', err);
//     }
// }
// runTableQuery();
                
*/
app.listen(PORT, () => console.log('Server is running on Port :', PORT));
