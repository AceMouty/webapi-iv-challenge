const express = require('express')
const router = express.Router();

// Fake DB to be used in the api
const shouts = [];

// Read
router.get("/", (req, res) => {
    res.status(200).json({data: shouts})
})

// Create
router.post("/", (req, res) => {
    // check if shouts is empty or not
    if(shouts.length === 0){
        shouts.push(req.body)
        // Add data to the shouts array
        res.status(201).json({message: "Shout created successfully"})
    } else {
        // Check if an id for a shout already exits, if it
        // does do not allow it to be entered
        shouts.forEach(shout => { 
            if(shout.id === req.body.id){
                return res.status(404).json({message: "shout with this ID already exists"})
            } else {
                shouts.push(req.body)
                // Add data to the shouts array
                return res.status(201).json({message: "Shout created successfully"})
            }
        })
    }
})

// Update
router.put("/", (req, res) => {
    if(shouts.length === 0){
        res.status(200).json({message: "There are currently no shouts"})
    } else {
        shouts.forEach(shout => {
            if (shout.id === req.body.id){
                shout.title = req.body.title
                res.status(200).json({message: "shout has been updated", data: shout})
            } else {
                res.status(404).json({message: "This shout does not exist"})
            }
        })
    }
})

// Delete
router.delete('/', (req, res) => {
    if(shouts.length === 0){
        res.status(200).json({message: "There are currently no shouts"})
    } else {
        shouts.forEach((shout, i) => {
            if(shout.id === req.body.id) {
                const removedShout = shouts.splice(i, i+1)
                res
                    .status(200)
                    .json({
                        mesage: "Shout was removed",
                        removedShout: removedShout,
                        shouts: shouts
                    })
            } else {
                res.status(200).json({message: "A shout with that ID does not exist"})
            }
        })
    }
})

// Export the routes for endpoints with /api/shouts
module.exports = router;

