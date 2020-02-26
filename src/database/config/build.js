const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connnection');

const sql = readFileSync(join(__dirname, 'build.sql'));

connection
    .query(sql)
    .then(()=> console.log('build created succecfullu'))
    .catch((err)=> console.log('failed to build', err.stack))

