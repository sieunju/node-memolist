const express = require('express');
const router = express.Router();
const utils = require('../utils/commandUtil');


// [S] TEST
router.get('/api/test',(req, res) => {
    try {
        let ran = Math.floor(Math.random() * 10)
        if(ran < 5) {
            res.status(200).send({
                status : true,
                name : "Mr.Ju",
                age : 30
            }).end()
        } else {
            res.status(200).send({
                status : true,
                test : "dddd",
                age : 30
            }).end()
        }
        
    } catch(err) {
        console.log("Error " + err)
    }
})

router.post('/api/test',(req,res) => {
    try {
        let ranBoolean = Math.random() < 0.5
        if(ranBoolean) {
            res.status(200).send({
                status : true,
                test : "dddd",
                age : 30
            })
            .end()
        } else {
            res.status(403).end()
        }        
    } catch(err) {
        console.log("Error " + err)
    }
})

// [E] TEST

module.exports = router