const { Server } = require("socket.io");

let io;
const initializeWebsocket = (server) => {
  io = new Server(server);
  io.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

const emitEvent = (event) => {
  if (io) {
    io.emit("newEvent", event);
  }
};

module.exports = {
  initializeWebsocket,
  emitEvent,
};
