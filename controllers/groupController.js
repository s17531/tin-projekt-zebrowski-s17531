const GroupRepository = require('../repository/mysql2/GroupRepository');
const LanguageRepository = require('../repository/mysql2/LanguageRepository');
const LevelRepository = require('../repository/mysql2/LevelRepository');
const TeacherRepository = require('../repository/mysql2/TeacherRepository');
const YearRepository = require('../repository/mysql2/YearRepository');

exports.showGroupList = (req, res, next) => {
    GroupRepository.getGroups()
        .then(grps => {
            res.render('pages/group/list', {
                grps: grps,
                navLocation: 'grp'
            });
        });
}

exports.showAddGroupForm = (req, res, next) => {
    let allLangs, allLevels, allTeachers, allYears;
    LanguageRepository.getLanguages()
        .then(langs => {
            allLangs = langs;
            return LevelRepository.getLevels();
        })
        .then(levels => {
            allLevels = levels;
            return TeacherRepository.getTeachers();
        })
        .then(tchs => {
            allTeachers = tchs;
            return YearRepository.getYears();
        })
        .then(years => {
            allYears = years;
            res.render('pages/group/form', {
                grp: {},
                formMode: 'createNew',
                allLangs: allLangs,
                allLevels: allLevels,
                allYears: allYears,
                allTeachers: allTeachers,
                pageTitle: 'Nowa grupa',
                btnLabel: 'Dodaj grupę',
                formAction: '/groups/add',
                navLocation: 'grp'
            });
        });

}

exports.showEditGroupForm = (req, res, next) => {
    const grpId = req.params.grpId;
    let allLangs, allLevels, allTeachers, allYears;
    LanguageRepository.getLanguages()
        .then(langs => {
            allLangs = langs;
            return LevelRepository.getLevels();
        })
        .then(levels => {
            allLevels = levels;
            return TeacherRepository.getTeachers();
        })
        .then(tchs => {
            allTeachers = tchs;
            return YearRepository.getYears();
        })
        .then(years => {
            allYears = years;
            GroupRepository.getGroupById(grpId)
                .then(grp => {
                    res.render('pages/group/form', {
                        grp: grp,
                        formMode: 'edit',
                        allLangs: allLangs,
                        allLevels: allLevels,
                        allYears: allYears,
                        allTeachers: allTeachers,
                        pageTitle: 'Edycja grupy',
                        btnLabel: 'Edytuj grupę',
                        formAction: '/groups/edit',
                        navLocation: 'grp'
                    });
                })
        });
};


exports.showGroupDetails = (req, res, next) => {

    const grpId = req.params.grpId;
    let allLangs, allLevels, allTeachers, allYears;
    LanguageRepository.getLanguages()
        .then(langs => {
            allLangs = langs;
            return LevelRepository.getLevels();
        })
        .then(levels => {
            allLevels = levels;
            return TeacherRepository.getTeachers();
        })
        .then(tchs => {
            allTeachers = tchs;
            return YearRepository.getYears();
        })
        .then(years => {
            allYears = years;
            GroupRepository.getGroupById(grpId)
                .then(grp => {
                    res.render('pages/group/form', {
                        grp: grp,
                        formMode: 'showDetails',
                        allLangs: allLangs,
                        allLevels: allLevels,
                        allYears: allYears,
                        allTeachers: allTeachers,
                        pageTitle: 'Szczegóły grupy',
                        formAction: '',
                        navLocation: 'grp'
                    });
                })

        });
}

exports.deleteGroup = (req, res, next) => {
    const grpId = req.params.grpId;
    GroupRepository.deleteGroup(grpId)
        .then(() => {
            res.redirect('/groups');
        });

};

exports.addGroup = (req, res, next) => {
    const grpData = { ...req.body };
    GroupRepository.createGroup(grpData)
        .then(result => {
            res.redirect('/groups');
        });
};

exports.updateGroup = (req, res, next) => {
    const grpId = req.body.idClass;
    const grpData = { ...req.body };
    GroupRepository.updateGroup(grpId, grpData)
        .then(result => {
            res.redirect('/groups');
        });
};
