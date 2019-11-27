const express = require('express'),
    exphbs = require('express-handlebars'),
    app = express();

//set up for sequelize
const db = require("./models/index");

const PORT = process.env.PORT || 8080;

//View engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars")

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))
app.use(express.static("views"))

//Synchronize schema and set server to listen
db.sequelize.sync({ force: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`---> App is listening on http://localhost:${PORT}`)
        });
    })


