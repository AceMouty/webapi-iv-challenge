const express = require('express');
const server = express();


// Teach the server json
server.use(express.json());


const port = 8000;
server.listen(port, () => console.log(`server is running on port ${port}`))