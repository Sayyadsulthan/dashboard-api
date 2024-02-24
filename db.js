const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST_URL,
    password: process.env.USER_PASSWORD,
    port: process.env.DB_PORT,
    database: 'Roxiler',
});

const createTransactionTable = () => {
    pool.query(
        `CREATE TABLE IF NOT EXISTS transactions(
            id INT NOT NULL,
            title VARCHAR,
            price NUMERIC(10, 2),
            description VARCHAR,
            category VARCHAR ,
            image TEXT,
            sold BOOLEAN,
            dateOfSale TIMESTAMPTZ,
            PRIMARY KEY(id)
    );`,
        [],
        (err, result) => {
            console.log(err ? 'Error in Create table \n' + err : ' table created....');
        }
    );
};

module.exports = {
    pool,
    createTransactionTable,
};
