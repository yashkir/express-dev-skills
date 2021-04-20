const Skill = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index', { skills: Skill.getAll() });
}

function show(req, res, next) {
    res.render('skills/show', { skill: Skill.getOne(req.params.id) });
}

module.exports = {
    index,
    show,
}
