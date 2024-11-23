const express = require("express");
const app = express();
const http = require("http");

const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const { initializeWebsocket } = require("./utils/webSocket");
const  eventRoute  = require("./routes/eventRoute");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
connectDB();
const server = http.createServer(app);

initializeWebsocket(server);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api",  eventRoute);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
