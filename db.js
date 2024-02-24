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
            title VARCHAR(50),
            price INT,
            description VARCHAR NOT NULL,
            category VARCHAR(255) NOT NULL,
            image TEXT,
            sold BOOLEAN,
            dateOfSale TIMESTAMPTZ,
            PRIMARY KEY(id)
    );`,
        [],
        (err, result) => {
            console.log(err ? 'Error in Create table \n' + err : result + '\n table created....');
        }
    );
};

module.exports = {
    pool,
    createTransactionTable,
};
