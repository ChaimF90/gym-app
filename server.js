const express = require("express");
const app = express();

// endpoints

function aboutHandler(req, res) {
    res.json({message: "GO AWAY!!!"})
}

function homeHandler(req, res) {
    res.json({message: "Feel free to leave ma'am!"})
}

app.get("/about", aboutHandler);

app.get("/home", homeHandler);

app.listen(5000, () => console.log("server is running on port 5000"));