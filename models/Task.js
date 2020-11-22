// imports 
const mongoose = require('mongoose'); 

let Schema = mongoose.Schema; 

// Modelo de tareas
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

// Exportar modelo
module.exports = mongoose.model('TaskModel', TaskSchema); 

