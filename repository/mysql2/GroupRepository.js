const db = require('../../config/mysql2/db');
exports.getGroups = () => {
    return db.promise().query('SELECT * FROM tin_z_a_bd12c_s17531.group')
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
    const groupNr = newGrpData.groupNr;
    const level = newGrpData.level;
    const hours = newGrpData.hours;
    const schoolYear = newGrpData.schoolYear;
    const idTeacher = newGrpData.idTeacher;

    const sql = 'INSERT into tin_z_a_bd12c_s17531.Group (groupNr, level, hours, schoolYear, idTeacher) VALUES (?, ?, ?, ?, ?)';
    return db.promise().execute(sql, [groupNr, level, hours, schoolYear, idTeacher]);
};

exports.updateGroup = (grpId, data) => {
    const groupNr = data.groupNr;
    const level = data.level;
    const hours = data.hours;
    const schoolYear = data.schoolYear;
    const idTeacher = data.idTeacher;

    const sql = 'UPDATE  tin_z_a_bd12c_s17531.Group set groupNr = ?, level = ?, hours = ?, schoolYear = ?, idTeacher = ? where idGroup = ?';
    return db.promise().execute(sql, [groupNr, level, hours, schoolYear, idTeacher, grpId]);
};

exports.deleteGroup = (stdId) => {
};