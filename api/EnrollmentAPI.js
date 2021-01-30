const EnrollmentRepository = require('../repository/mysql2/EnrollmentRepository');
exports.getEnrollments = (req, res, next) => {
    EnrollmentRepository.getEnrollments()
        .then(stds => {
            res.status(200).json(stds);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEnrollmentById = (req, res, next) => {
    const enrId = req.params.enrId;
    StudentRepository.getStudentById(enrId)
        .then(enrId => {
            if (!enrId) {
                res.status(404).json({
                    message: 'Enrollment with id: ' + enrId + ' not found'
                })
            } else {
                res.status(200).json(std);
            }
        });
};

exports.createEnrollment = (req, res, next) => {
    EnrollmentRepository.createEnrollment(req.body)
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

exports.updateEnrollment = (req, res, next) => {
    const enrId = req.params.enrId;
    EnrollmentRepository.updateEnrollment(enrId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Enrollment updated!', std: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteEnrollment = (req, res, next) => {
    const enrId = req.params.enrId;
    EnrollmentRepository.deleteEnrollment(enrId)
        .then(result => {
            res.status(200).json({ message: 'Removed enrollment', std: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};