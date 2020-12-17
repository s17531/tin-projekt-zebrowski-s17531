exports.showGroupList = (req, res, next) => {
    res.render('pages/group/list', { navLocation: 'grp' });
}

exports.showAddGroupForm = (req, res, next) => {
    res.render('pages/group/add', { navLocation: 'grp' });
}

exports.showGroupDetails = (req, res, next) => {
    res.render('pages/group/details', { navLocation: 'grp' });
}