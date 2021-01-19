const GroupRepository = require('../repository/mysql2/GroupRepository');
exports.getGroups = (req, res, next) => {
    GroupRepository.getGroups()
        .then(stds => {
            res.status(200).json(stds);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.createGroup = (req, res, next) => {
    GroupRepository.createGroup(req.body)
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

exports.updateGroup = (req, res, next) => {
    const grpId = req.params.grpId;
    GroupRepository.updateGroup(grpId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Group updated!', grp: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};