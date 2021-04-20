const skills = [
    {id: 0, title: "Problem Solving",
            description: "I am a great problem solver."
    },
    {id: 1, title: "Programming",
            description: "Experienced in many programming languages and " +
                         "systems. Comfortable in the Linux shell."
    },
    {id: 2, title: "Communication",
            description: `
            Ipsum dignissimos a ad iste quisquam Sit dignissimos at placeat at
            consectetur neque Magni libero fuga quod illum dolorum, culpa. At
            fugit reprehenderit excepturi quos porro cumque! Nemo quibusdam
            alias!  `
    },
]

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id == id);
}

module.exports = {
    getAll,
    getOne,
}
