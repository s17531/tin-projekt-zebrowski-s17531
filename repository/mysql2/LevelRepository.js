const db = require('../../config/mysql2/db');

exports.getLevels = () => {
    return db.promise().query('SELECT *  FROM Level')
        .then((results, fields) => {
            console.log(results[0]);
            return results[0];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

