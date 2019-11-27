const express = require('express'),
    app = express();

//Routes
app.get("/", (req, res) =>{
    res.render("index")
})

module.exports = app;