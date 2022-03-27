import mysql from 'mysql'

var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'sa',
  password : 'secret',
  database : 'facturador'
});

// await 
function query(statement, params) {
    return new Promise(function (resolve, reject) {
        pool.query(statement, params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

function queryInsert(statement, params) {
    return new Promise(function (resolve, reject) {
        pool.query(statement, params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.insertId);
            }
        })
    });
}

export default query;