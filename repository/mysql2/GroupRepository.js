const db = require('../../config/mysql2/db');
exports.getGroups = () => {
    return db.promise().query('SELECT * FROM class')
        .then((results, fields) => {
            console.log(results[0]);
            return results[0];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};
exports.getGroupById = (stdId) => {
};

exports.createGroup = (newGrpData) => {
    const classNr = newGrpData.classNr;
    const level = newGrpData.level;
    const hours = newGrpData.hours;
    const schoolYear = newGrpData.schoolYear;
    const idTeacher = newGrpData.idTeacher;

    const sql = 'INSERT into class (classNr, idLevel, hours, schoolYear, idTeacher) VALUES (?, ?, ?, ?, ?)';
    return db.promise().execute(sql, [classNr, level, hours, schoolYear, idTeacher]);
};

exports.updateGroup = (grpId, data) => {
    const classNr = data.classNr;
    const level = data.level;
    const hours = data.hours;
    const schoolYear = data.schoolYear;
    const idTeacher = data.idTeacher;

    const sql = 'UPDATE  class set classNr = ?, idLevel = ?, hours = ?, schoolYear = ?, idTeacher = ? where idGroup = ?';
    return db.promise().execute(sql, [classNr, level, hours, schoolYear, idTeacher, grpId]);
};

exports.deleteGroup = (stdId) => {
};