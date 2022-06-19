const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("Hello world! Your Cloud Functions API is working fine!");
});
module.exports = router;