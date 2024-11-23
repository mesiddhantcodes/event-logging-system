const mongoose = require("mongoose");

const eventLogSchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
  sourceAppId: {
    type: String,
    required: true,
  },
  dataPayload: {
    type: Object,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  previousHash: {
    type: String,
  },
});

eventLogSchema.index({ eventType: 1, sourceAppId: 1, timeStamp: -1 });
const EventLog = mongoose.model("EventLog", eventLogSchema);

module.exports = EventLog;
