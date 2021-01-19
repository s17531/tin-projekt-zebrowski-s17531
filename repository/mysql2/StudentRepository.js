const db = require('../../config/mysql2/db');
exports.getStudents = () => {
    return db.promise().query('SELECT * FROM student')
        .then((results, fields) => {
            console.log(results[0]);
            return results[0];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};
exports.getStudentById = (stdId) => {
};

exports.createStudent = (newStdData) => {
    const firstName = newStdData.firstName;
    const lastName = newStdData.lastName;
    const email = newStdData.email;
    const birthdate = newStdData.birthdate;
    const sql = 'INSERT into Student (firstName, lastName, email, birthdate) VALUES (?, ?, ?, ?)';
    return db.promise().execute(sql, [firstName, lastName, email, birthdate]);
};

exports.updateStudent = (stdId, data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const birthdate = data.birthdate;
    const sql = 'UPDATE  Student set firstName = ?, lastName = ?, email = ?, birthdate = ? where idStudent = ?';
    return db.promise().execute(sql, [firstName, lastName, email, birthdate, stdId]);
};

exports.deleteStudent = (stdId) => {
    const sql = 'DELETE FROM Student where idStudent = ?'
    return db.promise().execute(sql, [stdId]);
};