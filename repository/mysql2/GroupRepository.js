const db = require('../../config/mysql2/db');
exports.getGroups = () => {
    return db.promise().query('SELECT idClass, classNr, hours, year, level, CONCAT(firstName, " ", lastName) as teacherName, level, language FROM class INNER JOIN level ON class.idLevel=level.idLevel INNER JOIN teacher ON class.idTeacher=Teacher.idTeacher INNER JOIN language ON class.idLanguage=language.idLanguage INNER JOIN year ON class.idYear=year.idYear ORDER BY year')
        .then((results, fields) => {
            console.log(results[0]);
            return results[0];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};
exports.getGroupById = (grpId) => {
    const sql = 'SELECT * FROM class WHERE idClass = ?';
    return db.promise().query(sql, [grpId])
        .then((results, fields) => {
            // console.log(results[0]);
            const firstRow = results[0][0];
            if (!firstRow) {
                return {};
            }
            const grp = {
                idClass: parseInt(grpId),
                classNr: firstRow.classNr,
                idLevel: firstRow.idLevel,
                hours: firstRow.hours,
                idTeacher: firstRow.idTeacher,
                idYear: firstRow.idYear,
                idLanguage: firstRow.idLanguage
            }
            console.log(grp);
            return grp;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });

};

exports.createGroup = (newGrpData) => {
    const classNr = newGrpData.classNr;
    const idLanguage = newGrpData.idLanguage;
    const idLevel = newGrpData.idLevel;
    const hours = newGrpData.hours;
    const idYear = newGrpData.idYear;
    const idTeacher = newGrpData.idTeacher;

    const sql = 'INSERT into class (classNr, idLanguage, idLevel, hours, idYear, idTeacher) VALUES (?, ?, ?, ?, ?, ?)';
    return db.promise().execute(sql, [classNr, idLanguage, idLevel, hours, idYear, idTeacher]);
};

exports.updateGroup = (grpId, data) => {

    const classNr = data.classNr;
    const idLanguage = data.idLanguage;
    const idLevel = data.idLevel;
    const hours = data.hours;
    const idYear = data.idYear;
    const idTeacher = data.idTeacher;

    const sql = 'UPDATE  class set classNr = ?, idLevel = ?, hours = ?, idYear = ?, idTeacher = ?, idLanguage = ? where idClass = ?';
    return db.promise().execute(sql, [classNr, idLevel, hours, idYear, idTeacher, idLanguage, grpId]);

};

exports.deleteGroup = (grpId) => {
    const sql = 'DELETE FROM Class where idClass = ?'
    return db.promise().execute(sql, [grpId]);
};