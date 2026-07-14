const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const sessionOptions = {
  secret: "supersecret", 
  resave: false,
  saveUninitialized: true
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
   let {name = "anonymous"} = req.query;
   req.flash("success", "user registered successfully!");
   req.session.name = name;
   res.redirect("/hello");
});

app.get("/hello" , (req, res) => {
  res.render("page.ejs", {name: req.session.name, msg: req.flash("success")})
});

/*app.get("/reqcount", (req, res) => {
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
  res.send(`you send a request ${req.session.count} time`);
});*/

app.listen("3000", () => {
    console.log("server is listening 3000 port")
});