const express = require("express");
const router = express.Router();

const { addEvent, getEvent } = require("../controllers/eventController");

router.post("/add", addEvent);
router.get("/getEvents", getEvent);

module.exports = router;
