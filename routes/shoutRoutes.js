const express = require('express')
const router = express.Router();

// Fake DB to be used in the api
const shouts = [];

router.get("/", (req, res) => {
    res.status(200).json({data: shouts})
})

router.post("/", (req, res) => {
    // check if shouts is empty or not
    if(shouts.length < 1){
        shouts.push(req.body)
        // Add data to the shouts array
        res.status(201).json({message: "Shout created successfully"})
    } else {
        // Check if an id for a shout already exits, if it
        // does do not allow it to be entered
        shouts.forEach(shout => { 
            if(shout.id === req.body.id){
                res.status(404).json({message: "shout with this ID already exists"})
            } else {
                shouts.push(req.body)
                // Add data to the shouts array
                res.status(201).json({message: "Shout created successfully"})
            }
        })
    }
})


// Export the routes for endpoints with /api/shouts
module.exports = router;

