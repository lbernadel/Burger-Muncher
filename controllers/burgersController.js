const express = require('express'),
    app = express(),
    db = require("../models/index");

//Routes
app.get("/", (req, res) =>{
    db.burgers.findAll()
        .then(burger => {
            res.render("index", {burgers: burger})
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

app.post("/api/burgers", (req, res) => {
    const {burger_name} = req.body

    db.burgers.create({burger_name})
        .then( newBurger => {
            res.json(newBurger)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

app.put("/api/burgers/:id", (req, res) => {
    const {id} = req.params,
        {isEaten} = req.body;
    
    db.update({ isEaten: isEaten }, { where: {id: id} })
        .then(updateBurgers => {
            res.json(updateBurgers)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = app;