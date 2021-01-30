const LanguageRepository = require('../repository/mysql2/LanguageRepository');

exports.getLanguages = (req, res, next) => {
    LanguageRepository.getLanguages()
        .then(grps => {
            res.status(200).json(grps);
        })
        .catch(err => {
            console.log(err);
        });
};

