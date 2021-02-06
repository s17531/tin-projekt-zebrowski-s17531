const db = require('../../config/mysql2/db');

exports.findByEmail = (email) => {
    const sql = 'SELECT idTeacher as id, firstName, lastName, email,  password, "n" as role FROM teacher WHERE email = ? UNION SELECT idStudent as id, firstName, lastName, email, password, "s" as role FROM student WHERE email = ? ';
    return db.promise().query(sql, [email, email])
        .then((results, fields) => {
            console.log(results[0][0]);
            const firstRow = results[0][0];
            if (!firstRow) {
                return {};
            }
            const user = {
                id: firstRow.id,
                firstName: firstRow.firstName,
                lastName: firstRow.lastName,
                email: firstRow.email,
                password: firstRow.password,
                role: firstRow.role
            }
            console.log(user);
            return user;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};