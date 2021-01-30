const GroupRepository = require('../repository/mysql2/GroupRepository');
exports.getGroups = (req, res, next) => {
    GroupRepository.getGroups()
        .then(grps => {
            res.status(200).json(grps);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getGroupById = (req, res, next) => {
    const grpId = req.params.grpId;
    GroupRepository.getGroupById(grpId)
        .then(grp => {
            if (!grp) {
                res.status(404).json({
                    message: 'Group with id: ' + grpId + ' not found'
                })
            } else {
                res.status(200).json(grp);
            }
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

exports.deleteGroup = (req, res, next) => {
    const grpId = req.params.grpId;
    GroupRepository.deleteGroup(grpId)
        .then(result => {
            res.status(200).json({ message: 'Removed group', grp: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};