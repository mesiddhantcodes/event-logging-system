const EventLogs = require("../models/eventLog");
const hashGenerator = require("../utils/hashGenerator");
const validateEvent = require("../utils/schemaValidator");

const addEvent = async (req, res) => {
  try {
    const error = validateEvent(req.body);
    console.log(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const { eventType, sourceAppId, dataPayload } = req.body;
    const lastLog = await EventLogs.findOne().sort({ timeStamp: -1 });
    const previousHash = lastLog ? lastLog.hash : null;
    const newLog = {
      eventType,
      sourceAppId,
      dataPayload,

      previousHash,
    };
    newLog.hash = hashGenerator(newLog);
    const event = new EventLogs(newLog);
    await event.save();
    res.status(200).json({ message: "Event added successfully", event });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", error: error.message });
  }
};

const getEvent = async (req, res) => {
  try {
    const {
      eventType,
      sourceAppId,
      start,
      end,
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};
    if (eventType) {
      query.eventType = eventType;
    }
    if (sourceAppId) {
      query.sourceAppId = sourceAppId;
    }
    if (start && end) {
      query.timeStamp = { $gte: start, $lte: end };
    }
    const events = await EventLogs.find(query)
      .sort({ timeStamp: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.status(200).json(events);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  addEvent,
  getEvent,
};
