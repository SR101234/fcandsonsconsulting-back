const express = require("express");
const control = require("../controllers/controller.js");

const router = express.Router();

router.route("/").post(control.create_query);




module.exports = router;
