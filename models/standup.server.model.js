const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
      
const memeberNameValidator = [ // array
    function (value) {
        return (value.length > 0 && value.toLocaleLowerCase() != 'none');
    },
    // custom error text
    'Select a valid Member Name.'
];

const requiredStringValidator = [
    function (val) {
        const testVal = val.trim(); // trim spaces
        return (testVal.length > 0);
    }, '{PATH} cannot be empty.'   
];
      
const standupSchema = new Schema({
    
    memberName: {
        type: String, 
        required: true,
        validate: memeberNameValidator
    },
    project: {
        type: String, 
        required: true,
        validate: requiredStringValidator
    },
    workYesterday: {
        type: String, 
        required: true,
        validate: requiredStringValidator
    },
    impediment: {
        type: String, 
        required: true, 
        default: 'none',
        validate: requiredStringValidator
    },
    createdOn: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('Standup', standupSchema);