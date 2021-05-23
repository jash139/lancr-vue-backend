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
        const title = "title";
        const profilePicture = "";
        const about = "About me.";
        const dateOfBirth = "";
        const rating = 0;
        const totalRatings = 0;
        const experience = [];
        const contact = {
            phone: "",
            location: {
                city: "",
                state: "",
                country: ""
            },
            email: "",
        };
        const connections = [];
        const projects = [];
        const skills = [];
        const languages = [];

        const newUser = new User({
            uid,
            name,
            title,
            profilePicture,
            about,
            dateOfBirth,
            rating,
            totalRatings,
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

router.route("/:uid")
    .get(function (req, res) {
        User.findOne({ uid: req.params.uid })
            .then(user => res.json(user))
            .catch(error => res.status(400).json(error));
    })
    .patch(function (req, res) {
        User.update(
            { uid: req.params.uid },
            { $set: req.body }
        )
            .then(() => res.json("User data updated."))
            .catch(error => res.status(400).json("Error: " + error));
    });

module.exports = router;