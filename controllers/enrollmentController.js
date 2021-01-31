const EnrollmentRepository = require('../repository/mysql2/EnrollmentRepository');
const StudentRepository = require('../repository/mysql2/StudentRepository');
const GroupRepository = require('../repository/mysql2/GroupRepository');

exports.showEnrollmentList = (req, res, next) => {
    EnrollmentRepository.getEnrollments()
        .then(enrs => {
            res.render('pages/enrollment/list', {
                enrs: enrs,
                navLocation: 'enr'
            });
        });
}

exports.showAddEnrollmentForm = (req, res, next) => {
    let allStudents, allGroups;

    StudentRepository.getStudents()
        .then(stds => {
            allStudents = stds;
            return GroupRepository.getGroups();
        })
        .then(grps => {
            allGroups = grps;
            res.render('pages/enrollment/form', {
                enr: {},
                allStudents: allStudents,
                allGroups: allGroups,
                pageTitle: 'Nowe przypisanie',
                formMode: 'createNew',
                btnLabel: 'Dodaj przypisanie',
                formAction: '/enrollments/add',
                navLocation: 'enr'
            })
        });
}

exports.showEditEnrollmentForm = (req, res, next) => {
    let allStudents, allGroups;
    const enrId = req.params.enrId;
    StudentRepository.getStudents()
        .then(stds => {
            allStudents = stds;
            return GroupRepository.getGroups();
        })
        .then(grps => {
            allGroups = grps;
            EnrollmentRepository.getEnrollmentById(enrId)
                .then(enr => {
                    res.render('pages/enrollment/form', {
                        enr: enr,
                        allStudents: allStudents,
                        allGroups: allGroups,
                        formMode: 'edit',
                        pageTitle: 'Edycja przypisania',
                        btnLabel: 'Edytuj przypisanie',
                        formAction: '/enrollments/edit',
                        navLocation: 'enr'
                    });
                });

        });
};

exports.showEnrollmentDetails = (req, res, next) => {
    let allStudents, allGroups;
    const enrId = req.params.enrId;
    StudentRepository.getStudents()
        .then(stds => {
            allStudents = stds;
            return GroupRepository.getGroups();
        })
        .then(grps => {
            allGroups = grps;
            EnrollmentRepository.getEnrollmentById(enrId)
                .then(enr => {
                    res.render('pages/enrollment/form', {
                        enr: enr,
                        allStudents: allStudents,
                        allGroups: allGroups,
                        formMode: 'showDetails',
                        pageTitle: 'Szczegóły przypisania',
                        formAction: '',
                        navLocation: 'enr'
                    });
                });

        });
}

exports.deleteEnrollment = (req, res, next) => {
    const enrId = req.params.enrId;
    EnrollmentRepository.deleteEnrollment(enrId)
        .then(() => {
            res.redirect('/enrollments');
        });

};

exports.addEnrollment = (req, res, next) => {
    const enrData = { ...req.body };
    EnrollmentRepository.createEnrollment(enrData)
        .then(result => {
            res.redirect('/enrollments');
        });
};

exports.updateEnrollment = (req, res, next) => {
    const enrId = req.body.idEnrollment;
    const enrData = { ...req.body };
    EnrollmentRepository.updateEnrollment(enrId, enrData)
        .then(result => {
            res.redirect('/enrollments');
        });
};
