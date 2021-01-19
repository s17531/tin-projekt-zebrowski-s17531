const db = require('../../config/mysql2/db');
exports.getTeachers = () => {
    return db.promise().query('SELECT * FROM Teacher')
        .then((results, fields) => {
            console.log(results[0]);
            return results[0];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};
exports.getTeacherById = (tchId) => {
};

exports.createTeacher = (newTchData) => {
    const firstName = newTchData.firstName;
    const lastName = newTchData.lastName;
    const email = newTchData.email;
    const education = newTchData.education;
    const sql = 'INSERT into Teacher (firstName, lastName, email, education) VALUES (?, ?, ?, ?)';
    return db.promise().execute(sql, [firstName, lastName, email, education]);
};

exports.updateTeacher = (tchId, data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const education = data.education;
    const sql = 'UPDATE  Teacher set firstName = ?, lastName = ?, email = ?, education = ? where idTeacher = ?';
    return db.promise().execute(sql, [firstName, lastName, email, education, tchId]);
};

exports.deleteTeacher = (tchId) => {
};