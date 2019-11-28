const express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    morgan = require("morgan");

//set up for sequelize
const db = require("./models/index");

const PORT = process.env.PORT || 8080;

//View engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars")

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan("dev"))

//static assets
app.use(express.static("public"))

//Routes
app.use(require("./controllers/burgersController"))

//Synchronize schema and set server to listen
db.sequelize.sync({ force: process.env.NODE_ENV !== "production" })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`---> Server is listening on http://localhost:${PORT}/`)
        });
    });


