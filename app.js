const express = require("express");
const port = 3000
const app = express();

app.get('/', (req,res) => res.send('my first rest api'));

app.listen(port, () => {
    console.log("Listening on port 3000");
})