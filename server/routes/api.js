const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();

//get a list of ninjas from the db
router.get('/ninjas', (req, res, next) => {
    console.log(req.query);
    Ninja.find(
        {name: req.query.name}
    ).then(function(ninjas){
        res.send(ninjas);
    }).catch(next);
});

//add a new ninja to the db
router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then(ninja => {
        res.send(ninja);
    }).catch(next);
});

//update a ninjas in the db
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({_id: req.params.id}).then(ninja => {
            res.send(ninja);
        })
    });
});

//delete a ninjas from the db
router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja) => {
        res.send(ninja);
    });
    
});

module.exports = router;