const express = require('express');
const server = express();

// Bring in routes
const shoutRoutes = require('./routes/shoutRoutes');

// Teach the server json
server.use(express.json());

// use in routes
server.use("/api/shouts", shoutRoutes)

server.get("/", (req, res) => {
    res.status(200).json({data: "Hello node22"})
})

// Dynamic port, must be done for hosting in heroku
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`API is running on port ${port}`))