const db = require('../../config/mysql2/db');
exports.getEnrollments = () => {
    return db.promise().query('SELECT firstName, lastName, classNr FROM enrollment INNER JOIN student ON enrollment.idStudent = student.idStudent INNER JOIN class ON enrollment.idClass = class.idClass')
        .then((results, fields) => {
            console.log(results[0]);
            return results[0];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};
exports.getEnrollmentById = (enrId) => {

};

exports.createEnrollment = (newEnrData) => {
    const idStudent = newEnrData.idStudent;
    const idGroup = newEnrData.idGroup;

    const sql = 'INSERT into Enrollment (idStudent, idClass) VALUES (?, ?)';
    return db.promise().execute(sql, [idStudent, idGroup]);
};

exports.updateEnrollment = (enrId, data) => {
    const idStudent = newEnrData.idStudent;
    const idGroup = newEnrData.idGroup;

    const sql = 'UPDATE  Enrollment set idStudent = ?, idClass = ? where idEnrollment = ?';
    return db.promise().execute(sql, [idStudent, idGroup, enrId]);
};

exports.deleteEnrollment = (enrId) => {
    const sql = 'DELETE FROM Enrollment where idEnrollment = ?'
    return db.promise().execute(sql, [enrId]);
};