const express = require('express');
const router = express.Router();
const List = require('../models/list.js');






// Index
router.get('/', (req, res) => {
    // Use Recipe model to get all Recipes
    List.find({}, (error, alltodo) => {

        
        if (error) {
            // handle error
            return;
          }
          if (alltodo.length) {
            // there are user(s)
            res.render('Index', {
                list: alltodo
            })
          }else{
            res.render('Index', {
                list: undefined
            })
          }
        
    });

});



// Create
router.post('/', (req, res) => {
    
    // Use Model to create Fruit Document
    List.create(req.body, (error, addTodo) => {
        console.log(addTodo)
        // Once created - respond to client
        res.redirect('/todo');
    });
});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    List.findByIdAndRemove(req.params.id, (err, list) => {
        res.redirect('/todo');
    });
});



/// export router 
module.exports= router;