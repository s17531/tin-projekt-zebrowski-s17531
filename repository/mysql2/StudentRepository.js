const db = require('../../config/mysql2/db');
const stdSchema = require('../../model/joi/Student');

exports.getStudents = () => {
    return db.promise().query('SELECT *  FROM student ORDER BY lastName, firstName')
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
    const sql = 'SELECT s.idStudent, s.firstName, s.lastName, s.email, DATE_FORMAT(birthdate, "%Y-%m-%d") as birthdate, classNr, language, year, c.idClass, CONCAT(t.firstName,  " ", t.lastName) as teacher, t.idTeacher FROM student s LEFT JOIN enrollment e ON s.idStudent=e.idStudent LEFT JOIN class c ON c.idClass=e.idClass LEFT JOIN language l ON c.idLanguage=l.idLanguage LEFT JOIN year y ON c.idYear=y.idYear LEFT JOIN teacher t ON c.idTeacher=t.idTeacher WHERE s.idStudent = ?';
    return db.promise().query(sql, [stdId])
        .then((results, fields) => {
            // console.log(results[0][0]);
            const firstRow = results[0][0];
            if (!firstRow) {
                return {};
            }
            const std = {
                idStudent: parseInt(stdId),
                firstName: firstRow.firstName,
                lastName: firstRow.lastName,
                email: firstRow.email,
                birthdate: firstRow.birthdate,
                enrollments: []
            }
            for (let i = 0; i < results[0].length; i++) {
                const row = results[0][i];
                if (row.idStudent) {
                    const enrollment = {
                        idStudent: row.idStudent,
                        classNr: row.classNr,
                        language: row.language,
                        year: row.year,
                        idClass: row.idClass,
                        teacher: row.teacher,
                        idTeacher: row.idTeacher
                    };
                    std.enrollments.push(enrollment);
                }
            }
            console.log(std);
            return std;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

exports.createStudent = (newStdData) => {
    const vRes = stdSchema.validate(newStdData, { abortEarly: false });
    if (vRes.error) {
        return Promise.reject(vRes.error);
    }

    const firstName = newStdData.firstName;
    const lastName = newStdData.lastName;
    const email = newStdData.email;
    const birthdate = newStdData.birthdate;
    const sql = 'INSERT into Student (firstName, lastName, email, birthdate) VALUES (?, ?, ?, ?)';
    return db.promise().execute(sql, [firstName, lastName, email, birthdate]);

};

exports.updateStudent = (stdId, data) => {
    const vRes = stdSchema.validate(data, { abortEarly: false });
    if (vRes.error) {
        return Promise.reject(vRes.error);
    }
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

checkEmailUnique = (email, stdId) => {
    let sql, promise;
    if (stdId) {
        sql = `SELECT COUNT(1) as c FROM Student where idStudent != ? and email = ?`;
        promise = db.promise().query(sql, [stdId, email]);
    } else {
        sql = `SELECT COUNT(1) as c FROM Student where email = ?`;
        promise = db.promise().query(sql, [email]);
    }
    return promise.then((results, fields) => {
        const count = results[0][0].c;
        let err = {};
        if (count > 0) {
            err = {
                details: [{
                    path: ['email'],
                    message: 'Podany adres email jest już używany'
                }]
            };
        }
        return err;
    });
}