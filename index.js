const express = require("express");
const nunjucks = require("nunjucks")
const path = require("path")

const app = express();


nunjucks.configure(["node_modules/govuk-frontend/dist", "views"], {
    autoescape:true,
    express: app
})

app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.render("in.njk")
})

app.listen(3000, () => {
    console.log(" i m listineing")
})