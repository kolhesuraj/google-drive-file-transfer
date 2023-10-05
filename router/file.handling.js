const express = require("express");
const router = express.Router();
const transferFileController = require("../controller/transfer.video.controller");

// route for file operations
router.get('/transfer_file', transferFileController.transferFile);


module.exports = router;
