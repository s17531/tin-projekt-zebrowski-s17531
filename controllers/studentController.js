const StudentRepository = require('../repository/mysql2/StudentRepository');

exports.showStudentList = (req, res, next) => {
    StudentRepository.getStudents()
        .then(stds => {
            res.render('pages/student/list', {
                stds: stds,
                navLocation: 'std'
            });
        });
}

exports.showAddStudentForm = (req, res, next) => {
    res.render('pages/student/form', {
        std: {},
        pageTitle: 'Nowy uczeń',
        formMode: 'createNew',
        btnLabel: 'Dodaj ucznia',
        formAction: '/students/add',
        navLocation: 'std',
        validationErrors: []
    });
}

exports.showEditStudentForm = (req, res, next) => {
    const stdId = req.params.stdId;
    StudentRepository.getStudentById(stdId)
        .then(std => {
            res.render('pages/student/form', {
                std: std,
                formMode: 'edit',
                pageTitle: 'Edycja ucznia',
                btnLabel: 'Edytuj ucznia',
                formAction: '/students/edit',
                navLocation: 'std',
                validationErrors: []
            });
        });
};

exports.showStudentDetails = (req, res, next) => {
    const stdId = req.params.stdId;
    StudentRepository.getStudentById(stdId)
        .then(std => {
            res.render('pages/student/form', {
                std: std,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły ucznia',
                formAction: '',
                navLocation: 'std',
                validationErrors: []
            });
        });
}

exports.deleteStudent = (req, res, next) => {
    const stdId = req.params.stdId;
    StudentRepository.deleteStudent(stdId)
        .then(() => {
            res.redirect('/students');
        });

};

exports.addStudent = (req, res, next) => {
    const stdData = { ...req.body };
    StudentRepository.createStudent(stdData)
        .then(result => {
            res.redirect('/students');
        })
        .catch(err => {
            res.render('pages/student/form', {
                std: stdData,
                pageTitle: 'Dodawanie ucznia',
                formMode: 'createNew',
                btnLabel: 'Dodaj ucznia',
                formAction: '/students/add',
                navLocation: 'std',
                validationErrors: err.details
            });
        });
};

exports.updateStudent = (req, res, next) => {
    const stdId = req.body.idStudent;
    const stdData = { ...req.body };
    StudentRepository.updateStudent(stdId, stdData)
        .then(result => {
            res.redirect('/students');
        })
        .catch(err => {
            res.render('pages/student/form', {
                std: stdData,
                pageTitle: 'Edycja ucznia',
                formMode: 'edit',
                btnLabel: 'Dodaj ucznia',
                formAction: '/students/edit',
                navLocation: 'std',
                validationErrors: err.details
            });
        });

};
