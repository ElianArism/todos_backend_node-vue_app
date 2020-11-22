// imports 
const express = require('express'); 
const Task = require('../models/Task');
// instancia express 
const app = express(); 

// new task 
app.post('/task', (req, res) => {
    let { info, isFeatured = false } = req.body; 

    const newTask = new Task({
        info, 
        isFeatured
    }); 

    newTask.save((err, savedTask) => {
        if (err) {
            return res.status(500).json({
                ok: false, 
                msg: 'Server error.'
            });
        } 
        else if (!savedTask) {
            return res.status(400).json({
                ok: false, 
                msg: 'Algo salio mal.'
            }); 
        } 
        else {
            return res.json({
                ok: true, 
                savedTask
            }); 
        }
    });
}); 

// edit task 
app.put('/task/:id', (req, res) => {
    let id = req.params.id; 

    Task.findByIdAndUpdate(id, req.body, {new: true, context:'query'}, (err, updateTask) => {
        if (err) {
            return res.status(404).json({
                ok: false, 
                msg: 'No se encontro tarea que coincida con el id suministrado.'
            }); 
        }
        return res.json({
            ok:true, 
            updateTask
        }); 
    }); 
}); 

// list tasks 
app.get('/task', (req, res) => {
    Task.find((err, tasksList) => {
        if (err) {
            if (err) {
                return res.status(500).json({
                    ok: false, 
                    msg: 'Server error.'
                });
            } 
        }

        // total tasks
        Task.count((err,count) => {
            if (err) {
                return res.status(500).json({
                    ok: false, 
                    msg: 'Server error.'
                });
            } 
            
            if(tasksList) {
                return res.json({
                    ok: true,
                    tasksList, 
                    tasks: count 
                }); 
            }
        }); 
    }); 
}); 

// list featured tasks  
app.get('/featured', (req, res) => {
    Task.find({isFeatured: true}, (err, tasksList) => {
        if (err) {
            if (err) {
                return res.status(500).json({
                    ok: false, 
                    msg: 'Server error.'
                });
            } 
        }

        // total featured tasks
        Task.count({isFeatured: true}, (err,count) => {
            if (err) {
                return res.status(500).json({
                    ok: false, 
                    msg: 'Server error.'
                });
            } 
            
            if(tasksList) {
                return res.json({
                    ok: true,
                    tasksList, 
                    featuredTasks: count 
                }); 
            }
        }); 
    }); 
}); 

// list finished tasks 
app.get('/finished', (req, res) => {
    Task.find({isFinished: true}, (err, tasksList) => {
        if (err) {
            if (err) {
                return res.status(500).json({
                    ok: false, 
                    msg: 'Server error.'
                });
            } 
        }

        // total finished tasks
        Task.count({isFinished: true}, (err,count) => {
            if (err) {
                return res.status(500).json({
                    ok: false, 
                    msg: 'Server error.'
                });
            } 
            
            if(tasksList) {
                return res.json({
                    ok: true,
                    tasksList, 
                    finished: count 
                }); 
            }
        }); 
    }); 
}); 

// delete task 
app.delete('/task/:id', (req, res) => {
    let id = req.params.id; 

    Task.findByIdAndDelete(id, (err, deletedTask) => {
        if(err) {
            return res.status(500).json({
                ok: false, 
                msg: 'Server error.'
            });
        } 
        else if (!deletedTask) {
            return res.status(500).json({
                ok: false, 
                msg: 'No se encontro tarea que coincida con el id suministrado.'
            });
        } 
        else {
            return res.json({
                ok: true, 
                deletedTask
            }); 
        }
    }); 
}); 
// export express 
module.exports = app; 