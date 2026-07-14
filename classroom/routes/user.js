const express = require("express");
const router = express.Router();

//users
//Index
router.get("/", (req, res) => {
    res.send("GET for users")
});

//Show
router.get("/:id", (req, res) => {
    res.send("GET for user id")
});

//Create
router.post("/", (req, res) => {
    res.send("POST for users")
});

//Delete
router.delete("/:id", (req, res) => {
    res.send("DELETE for users id")
});

module.exports = router;