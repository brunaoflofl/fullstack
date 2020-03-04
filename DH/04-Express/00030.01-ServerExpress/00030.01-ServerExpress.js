const express = require('express');
let app = express();

//creating server
app.listen(3000,() => console.log("Server UP"));
app.get('/', (req,res) => {
    res.send("Olá mundo");
})