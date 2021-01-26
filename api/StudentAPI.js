const StudentRepository = require('../repository/mysql2/StudentRepository');
exports.getStudents = (req, res, next) => {
    StudentRepository.getStudents()
        .then(stds => {
            res.status(200).json(stds);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getStudentById = (req, res, next) => {
    const stdId = req.params.stdId;
    StudentRepository.getStudentById(stdId)
        .then(std => {
            if (!std) {
                res.status(404).json({
                    message: 'Student with id: ' + stdId + ' not found'
                })
            } else {
                res.status(200).json(std);
            }
        });
};

exports.createStudent = (req, res, next) => {
    StudentRepository.createStudent(req.body)
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

exports.updateStudent = (req, res, next) => {
    const stdId = req.params.stdId;
    StudentRepository.updateStudent(stdId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Student updated!', std: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteStudent = (req, res, next) => {
    const stdId = req.params.stdId;
    StudentRepository.deleteStudent(stdId)
        .then(result => {
            res.status(200).json({ message: 'Removed student', std: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};