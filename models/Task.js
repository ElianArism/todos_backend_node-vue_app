// imports 
const mongoose = require('mongoose'); 

let Schema = mongoose.Schema; 

// Task Model 
let TaskSchema = new Schema({
    info: {
        type: String, 
        required: true, 
        minlength: 1
    }, 
    isFeatured: {
        type: Boolean, 
        required: true,
        default: false  
    }, 
    isFinished: {
        type: Boolean, 
        required: true,
        default: false  
    }
}); 

// export model 
module.exports = mongoose.model('TaskModel', TaskSchema); 

