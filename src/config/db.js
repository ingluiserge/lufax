import mysql from 'mysql'

var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : 'root',
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

export default query;