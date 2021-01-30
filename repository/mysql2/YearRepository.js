const db = require('../../config/mysql2/db');

exports.getYears = () => {
    return db.promise().query('SELECT *  FROM Year ORDER BY year DESC')
        .then((results, fields) => {
            console.log(results[0]);
            return results[0];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

