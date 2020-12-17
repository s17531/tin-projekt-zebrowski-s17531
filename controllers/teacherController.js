exports.showTeacherList = (req, res, next) => {
    res.render('pages/teacher/list', { navLocation: 'tch' });
}

exports.showAddTeacherForm = (req, res, next) => {
    res.render('pages/teacher/add', { navLocation: 'tch' });
}

exports.showTeacherDetails = (req, res, next) => {
    res.render('pages/teacher/details', { navLocation: 'tch' });
}