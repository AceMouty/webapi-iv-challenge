const express = require('express');
const server = express();


// Teach the server json
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({data: "Hello node22"})
})

// Dynamic port
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`API is running on port ${port}`))