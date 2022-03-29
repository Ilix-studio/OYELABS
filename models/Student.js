const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    subject: {
      type: String,
      required: true
    } 

})
module.exports = Student = mongoose.model('student', StudentSchema);