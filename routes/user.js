const router = require("express").Router();
let User = require("../models/user.model");

router.route("/")
    .get(function (req, res) {
        User.find()
            .then(users => res.json(users))
            .catch(error => res.status(400).json(error));
    })
    .post(async function (req, res) {
        const uid = req.body.uid;
        const name = req.body.name;
        const title = req.body.title;
        const profilePicture = req.body.profilePicture;
        const about = req.body.about;
        const dateOfBirth = req.body.dateOfBirth;
        const rating = req.body.rating;
        const experience = req.body.experience;
        const contact = req.body.contact;
        const connections = req.body.connections;
        const projects = req.body.projects;
        const skills = req.body.skills;
        const languages = req.body.languages;

        const newUser = new User({
            uid,
            name,
            title,
            profilePicture,
            about,
            dateOfBirth,
            rating,
            experience,
            contact,
            connections,
            projects,
            skills,
            languages
        });
        const userExists = await User.exists({ uid: uid });

        if (!userExists) {
            newUser.save()
                .then(() => res.json("User created!"))
                .catch(error => res.status(400).json(error));
        } else {
            res.status(400).json("User already exists!");
        }
    });