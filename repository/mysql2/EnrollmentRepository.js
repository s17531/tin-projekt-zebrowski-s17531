const db = require('../../config/mysql2/db');

exports.getEnrollments = () => {
    return db.promise().query('SELECT idEnrollment, firstName, lastName, enrollmentDate, classNr FROM enrollment INNER JOIN student ON enrollment.idStudent = student.idStudent INNER JOIN class ON enrollment.idClass = class.idClass ORDER BY classNr, lastName, firstName')
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
    const sql = 'SELECT * FROM enrollment WHERE idEnrollment = ?';
    return db.promise().query(sql, [enrId])
        .then((results, fields) => {
            // console.log(results[0]);
            const firstRow = results[0][0];
            if (!firstRow) {
                return {};
            }
            const enr = {
                idEnrollment: parseInt(enrId),
                idStudent: firstRow.idStudent,
                idGroup: firstRow.idGroup,
                comment: firstRow.comment,
                enrollmentDate: firstRow.enrollmentDate
            }
            console.log(enr);
            return enr;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });

};

exports.createEnrollment = (newEnrData) => {
    const idStudent = newEnrData.idStudent;
    const idGroup = newEnrData.idGroup;
    const comment = data.comment;
    const enrollmentDate = data.enrollmentDate;

    const sql = 'INSERT into Enrollment (idStudent, idClass, comment, enrollmentDate) VALUES (?, ?, ?,CURDATE())';
    return db.promise().execute(sql, [idStudent, idGroup, comment, enrollmentDate]);
};

exports.updateEnrollment = (enrId, data) => {
    const idStudent = data.idStudent;
    const idGroup = data.idGroup;
    const comment = data.comment;

    const sql = 'UPDATE  Enrollment set idStudent = ?, idClass = ?, enrollmentDate =CURDATE(), comment = ?  where idEnrollment = ?';
    return db.promise().execute(sql, [idStudent, idGroup, comment, enrId]);
};

exports.deleteEnrollment = (enrId) => {
    const sql = 'DELETE FROM Enrollment where idEnrollment = ?'
    return db.promise().execute(sql, [enrId]);
};