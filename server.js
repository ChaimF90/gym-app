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

// function whenRunning() {
//     console.log("server is running on port 5000");
// }

// app.listen(5000, whenRunning);

app.listen(5000, () => console.log("Server is running on port 5000"));
