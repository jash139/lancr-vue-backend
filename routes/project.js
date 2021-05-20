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

router.route("/:id")
    .get(function (req, res) {
        Project.findById(req.params.id)
            .then(project => res.json(project))
            .catch(error => res.status(400).json(error));
    })
    .delete(function (req, res) {
        Project.findByIdAndDelete(req.params.id)
            .then(() => res.json("Project deleted!"))
            .catch(error => res.status(400).json("Error: " + error));
    })
    .patch(function (req, res) {
        Project.update(
            { _id: req.params.id },
            { $set: req.body }
        )
            .then(() => req.json("Project updated!"))
            .catch(error => res.status(400).json("Error: " + error));
    });