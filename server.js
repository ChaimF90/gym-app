const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "Vash");

// handlers
// function aboutHandler(req, res) {
//     // make db call
//     // take data render Vash file passing said data in
//     // res.render("index",{name: "Peeky"});
//     res.render("index");
// }

// function homeHandler(req, res) {
//     res.render("")
// }

function loginHandler(req, res) {
    res.render("login");
}


function signupHandler(req, res) {
    res.render("signup");
}
// endpoints
//app.get("/about", aboutHandler);

//app.get("/home", homeHandler);

app.get("/login", loginHandler);

// function whenRunning() {
//     console.log("server is running on port 5000");
// }
app.get("/signup", signupHandler);


// app.listen(5000, whenRunning);

app.listen(5000, () => console.log("Server is running on port 5000"));

let arr = [1, 2, 3, 4, 5, 6];

function disp() {
    console.log([i])
}


