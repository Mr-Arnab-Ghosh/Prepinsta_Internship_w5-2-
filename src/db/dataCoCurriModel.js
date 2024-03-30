const mongoose = require('mongoose');

const studentCoCurricularSchema = new mongoose.Schema({
    name: String,
    class: String,
    activity: String,
    details: String
})

const studentCoCurri = new mongoose.model('StudentCoCurri', studentCoCurricularSchema);

module.exports = studentCoCurri;