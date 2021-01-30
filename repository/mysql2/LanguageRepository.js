const db = require('../../config/mysql2/db');

exports.getLanguages = () => {
    return db.promise().query('SELECT *  FROM language')
        .then((results, fields) => {
            console.log(results[0]);
            return results[0];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

