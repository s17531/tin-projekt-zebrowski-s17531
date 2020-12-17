exports.showEnrolmentList = (req, res, next) => {
    res.render('pages/Enrolment/list', { navLocation: 'enr' });
}

exports.showAddEnrolmentForm = (req, res, next) => {
    res.render('pages/Enrolment/add', { navLocation: 'enr' });
}

exports.showEnrolmentDetails = (req, res, next) => {
    res.render('pages/Enrolment/details', { navLocation: 'enr' });
}