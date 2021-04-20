const Skill = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index', { title: "My Skills", skills: Skill.getAll() });
}

function show(req, res, next) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', { title: "Skill - " + skill.title, skill: skill });
}

module.exports = {
    index,
    show,
}
