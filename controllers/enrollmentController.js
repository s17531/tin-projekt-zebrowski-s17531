const EnrollmentRepository = require('../repository/mysql2/EnrollmentRepository');

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
    res.render('pages/enrollment/form', {
        enr: {},
        pageTitle: 'Nowe przypisanie',
        formMode: 'createNew',
        btnLabel: 'Dodaj przypisanie',
        formAction: '/enrollments/add',
        navLocation: 'enr'
    });
}

exports.showEditEnrollmentForm = (req, res, next) => {
    const enrId = req.params.enrId;
    EnrollmentRepository.getEnrollmentById(enrId)
        .then(enr => {
            res.render('pages/enrollment/form', {
                enr: enr,
                formMode: 'edit',
                pageTitle: 'Edycja przypisania',
                btnLabel: 'Edytuj przypisanie',
                formAction: '/enrollments/edit',
                navLocation: 'enr'
            });
        });
};

exports.showEnrollmentDetails = (req, res, next) => {
    const enrId = req.params.enrId;
    EnrollmentRepository.getEnrollmentById(enrId)
        .then(enr => {
            res.render('pages/enrollment/form', {
                enr: enr,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły przypisania',
                formAction: '',
                navLocation: 'enr'
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
