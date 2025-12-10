const express = require("express");
const control = require("../controllers/controller.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ hello: "world" });
});


router.route("/send").post(control.create_query);




module.exports = router;
