const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/tokensignin", authController.tokensignin);
module.exports = router;
