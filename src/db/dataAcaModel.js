const mongoose = require('mongoose');

const studentAcademicSchema = new mongoose.Schema({
    // studentId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Student',
    //     required: true
    // },
    // academicId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Academic',
    //     required: true
    // }
    name: String,
    class: String,
    Math: Number,
    English: Number,
    Science: Number
})

const studentAca = new mongoose.model('StudentAca', studentAcademicSchema);

module.exports = studentAca;