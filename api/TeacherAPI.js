const TeacherRepository = require('../repository/mysql2/TeacherRepository');
exports.getTeachers = (req, res, next) => {
    TeacherRepository.getTeachers()
        .then(tchs => {
            res.status(200).json(tchs);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.createTeacher = (req, res, next) => {
    TeacherRepository.createTeacher(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateTeacher = (req, res, next) => {
    const tchId = req.params.tchId;
    TeacherRepository.updateTeacher(tchId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Teacher updated!', tch: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};