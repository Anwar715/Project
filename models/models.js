const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    department : {
        type : String,
        required: true
    },
    salary : {
        type: String,
        required: true,
        unique: true
    },
    designation : {
        type : String,
        required: true
    },
    employee_type : {
        type : String,
        required: true
    },
     
})

const Userdb = mongoose.model('userdb', schema);
//console.log(mongoose.Collection('People'));

module.exports = Employeebd;