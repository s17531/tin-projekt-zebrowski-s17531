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


// exports.showStudentList = (req, res, next) => {
//     res.render('pages/student/list', { navLocation: 'std' });
// }

exports.showAddStudentForm = (req, res, next) => {
    res.render('pages/student/add', { navLocation: 'std' });
}

exports.showStudentDetails = (req, res, next) => {
    res.render('pages/student/details', { navLocation: 'std' });
}