const express = require('express');
const app = express();
const port = 8082;

app.get('/api/getTest', (req, res) => {
    res.send('get test');
})

app.post('/api/postTest', (req, res) => {
    console.log(req.param('popCount'))
    res.send("Pop Count : " + req.param('popCount'))
})

app.listen(port, () => {
    console.log(`Server is running. http://localhost:${port}`)
})
