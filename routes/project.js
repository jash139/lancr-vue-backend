const router = require("express").Router();
let Project = require("../models/project.model");

router.route("/")
    .get(function (req, res) {
        Project.find()
            .then(projects => res.json(projects))
            .catch(error => res.status(400).json(error));
    })
    .post(function (req, res) {
        const uid = req.body.uid;
        const title = req.body.title;
        const description = req.body.description;
        const status = req.body.status;
        const requirements = req.body.requirements;
        const offeredAmount = req.body.offeredAmount;
        const timePeriod = req.body.timePeriod;
        const location = req.body.location;
        const applicants = req.body.applicants;

        const newProject = new Project({
            uid,
            title,
            description,
            status,
            requirements,
            offeredAmount,
            timePeriod,
            location,
            applicants
        });
        newProject.save()
            .then(() => res.json("Project Added!"))
            .catch(error => res.status(400).json(error));
    });
