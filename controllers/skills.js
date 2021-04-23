const Skill = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index', { title: "My Skills", skills: Skill.getAll() });
}

function show(req, res, next) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', { title: "Skill - " + skill.title, skill: skill });
}

function newSkill(req, res) {
    res.render('skills/new', { title: "Add Skill" });
}

function create(req, res) {
    console.log("creating");
    Skill.create(req.body.title, req.body.description);
    res.redirect('/skills');
}

function _delete(req, res) {
    Skill.delete(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {
        title: "Edit Skill", 
        skill: Skill.getOne(req.params.id)
    });
}

function patch(req, res) {
    Skill.update(req.params.id, req.body.title, req.body.description);
    res.redirect('/skills');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: _delete,
    edit,
    patch,
}
