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

exports.getTeacherById = (req, res, next) => {
    const tchId = req.params.tchId;
    TeacherRepository.getTeacherById(tchId)
        .then(tch => {
            if (!tch) {
                res.status(404).json({
                    message: 'Teacher with id: ' + tchId + ' not found'
                })
            } else {
                res.status(200).json(tch);
            }
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

exports.deleteTeacher = (req, res, next) => {
    const tchId = req.params.tchId;
    TeacherRepository.deleteTeacher(tchId)
        .then(result => {
            res.status(200).json({ message: 'Removed teacher', tch: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};