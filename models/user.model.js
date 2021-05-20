const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: { type: String, required: true },
    name: String,
    title: String,
    profilePicture: String,
    about: String,
    dateOfBirth: String,
    rating: Number,
    experience: [
        {
            organization: String,
            role: String,
            start: String,
            end: String
        }
    ],
    contact: {
        phone: Number,
        location: { country: String, state: String, city: String },
        email: String
    },
    connections: [{ type: String }],
    projects: [{ type: String }],
    skills: [{ type: String }],
    languages: [{ type: String }]

}, { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;