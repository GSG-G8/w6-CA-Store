const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl = '';

if(process.env.NODE_ENV === 'testing'){
    dbUrl = process.env.TEST_DB_URL;
}else {
    dbUrl = process.env.DB_URL
}

if(!dbUrl) throw new Error ('No DB URL found !!!')

const options = {
    connectionString: dbUrl,
    ssl : {
        rejectUnauthorized: false
    }
}

module.exports = new Pool(options);
