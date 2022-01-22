const Pool = require("pg").Pool;

//im not sure how to change this yet to heroku stuff we can check that saturday
//rn i have it with my info
const pool = new Pool({
    user: "postgres",
    password: "11598",
    host: "localhost",
    port: 5432,
    database: "sandwich_maker"
});

module.exports = pool;