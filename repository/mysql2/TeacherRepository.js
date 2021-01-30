const db = require('../../config/mysql2/db');

exports.getTeachers = () => {
    return db.promise().query('SELECT idTeacher, firstName, lastName, email, education, language FROM Teacher INNER JOIN Language ON Teacher.idLanguage=Language.idLanguage ORDER BY lastName, firstName')
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
    const sql = 'SELECT firstName, lastName, email, education, idLanguage FROM teacher WHERE idTeacher = ?';
    return db.promise().query(sql, [tchId])
        .then((results, fields) => {
            console.log(results[0]);
            const firstRow = results[0][0];
            if (!firstRow) {
                return {};
            }
            const tch = {
                idTeacher: parseInt(tchId),
                firstName: firstRow.firstName,
                lastName: firstRow.lastName,
                email: firstRow.email,
                education: firstRow.education,
                idLanguage: firstRow.idLanguage
            }
            console.log(tch);
            return tch;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

exports.createTeacher = (newTchData) => {
    const firstName = newTchData.firstName;
    const lastName = newTchData.lastName;
    const email = newTchData.email;
    const education = newTchData.education;
    const idLanguage = newTchData.language;
    const sql = 'INSERT into Teacher (firstName, lastName, email, education, idLanguage) VALUES (?, ?, ?, ?, ?)';
    return db.promise().execute(sql, [firstName, lastName, email, education, idLanguage]);
};

exports.updateTeacher = (tchId, data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const education = data.education;
    const idLanguage = data.language;
    const sql = 'UPDATE  Teacher set firstName = ?, lastName = ?, email = ?, education = ?, idLanguage = ? where idTeacher = ?';
    return db.promise().execute(sql, [firstName, lastName, email, education, idLanguage, tchId]);
};

exports.deleteTeacher = (tchId) => {
    const sql = 'DELETE FROM Teacher where idTeacher = ?'
    return db.promise().execute(sql, [tchId]);
};