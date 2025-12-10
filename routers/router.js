const express = require("express");
const control = require("../controllers/controller.js");

const router = express.Router();

router.route("/").get({"hello": "world"});

router.route("/send").post(control.create_query);




module.exports = router;
