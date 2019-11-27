const express = require('express'),
    exphbs = require('express-handlebars'),
    app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`---> App is listening on http://localhost:${PORT}`)
});