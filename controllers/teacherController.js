const TeacherRepository = require('../repository/mysql2/TeacherRepository');

exports.showTeacherList = (req, res, next) => {
    TeacherRepository.getTeachers()
        .then(tchs => {
            res.render('pages/teacher/list', {
                tchs: tchs,
                navLocation: 'tch'
            });
        });
}

exports.showAddTeacherForm = (req, res, next) => {
    res.render('pages/teacher/form', {
        tch: {},
        pageTitle: 'Nowy uczeń',
        formMode: 'createNew',
        btnLabel: 'Dodaj lektora',
        formAction: '/teachers/add',
        navLocation: 'tch'
    });
}

exports.showEditTeacherForm = (req, res, next) => {
    const tchId = req.params.tchId;
    TeacherRepository.getTeacherById(tchId)
        .then(tch => {
            res.render('pages/teacher/form', {
                tch: tch,
                formMode: 'edit',
                pageTitle: 'Edycja lektora',
                btnLabel: 'Edytuj lektora',
                formAction: '/teachers/edit',
                navLocation: 'tch'
            });
        });
};

exports.showTeacherDetails = (req, res, next) => {
    const tchId = req.params.tchId;
    TeacherRepository.getTeacherById(tchId)
        .then(tch => {
            res.render('pages/teacher/form', {
                tch: tch,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły lektora',
                formAction: '',
                navLocation: 'tch'
            });
        });
}

exports.deleteTeacher = (req, res, next) => {
    const tchId = req.params.tchId;
    TeacherRepository.deleteTeacher(tchId)
        .then(() => {
            res.redirect('/teachers');
        });

};

exports.addTeacher = (req, res, next) => {
    const tchData = { ...req.body };
    TeacherRepository.createTeacher(tchData)
        .then(result => {
            res.redirect('/teachers');
        });
};

exports.updateTeacher = (req, res, next) => {
    const tchId = req.body.idTeacher;
    const tchData = { ...req.body };
    TeacherRepository.updateTeacher(tchId, tchData)
        .then(result => {
            res.redirect('/teachers');
        });
};
