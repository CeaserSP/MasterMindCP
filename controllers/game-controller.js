var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('index');
});

// post route to track user wins and losses

module.exports = router;