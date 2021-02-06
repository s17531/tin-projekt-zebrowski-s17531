const StudentRepository = require('../repository/mysql2/UserRepository');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    StudentRepository.findByEmail(email)
        .then(user => {
            if (!user) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            } else if (user.password === password) {
                req.session.loggedUser = user;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            }
        })

        .catch(err => {
            console.log(err);
        });
}
exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}

exports.permitAuthenticatedUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    if (loggedUser) {
        next();
    } else {
        throw new Error('unauthorized access');
    }
}