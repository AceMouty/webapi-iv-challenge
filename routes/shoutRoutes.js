const express = require('express')
const router = express.Router();

// Fake DB to be used in the api
const shouts = [];

router.get("/", (req, res) => {
    res.status(200).json({data: shouts})
})


// Export the routes for endpoints with /api/shouts
module.exports = router;

