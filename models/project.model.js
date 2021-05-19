const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    uid: { type: String, required: true },

    title: String,
    description: String,

    status: String,

    requirements: [{ type: String }],
    offeredAmount: { currencyType: String, start: Number, end: Number },

    timePeriod: { start: String, end: String },

    location: { country: String, state: String, city: String },

    applicants: [{ type: String }]
},
    { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;