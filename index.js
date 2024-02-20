const express = require("express");
const nunjucks = require("nunjucks")
const path = require("path")
const bodyParser = require("body-parser")
const logger = require("./middleware/logger");
const router = require("./routes/router")

const app = express();
const port = process.env.port || 3000;

nunjucks.configure(["node_modules/govuk-frontend/dist", "views"], {
    autoescape:true,
    express: app
})

app.use(bodyParser.urlencoded({ extended: false }));

app.use(router)

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(" i m listineing")
})