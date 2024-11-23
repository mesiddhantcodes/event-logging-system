# Event Logging System

An Event Logging System to record and retrieve application events using Node.js, Express, and MongoDB.

## Features

- **Add Event**: Log application events with a hash to maintain integrity.
- **Fetch Events**: Retrieve logged events with filtering and pagination.
- **WebSocket Integration**: Supports real-time communication via WebSocket.
- **Validation**: Ensures incoming requests meet schema requirements.
- **Hashing**: Implements a hash chain to maintain event integrity.

## Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- A package manager like `npm` or `yarn`

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mesiddhantcodes/event-logging-system.git
   cd event-logging-system

   npm install

   touch .env

    MONGO_URI=your_mongodb_connection_string
    PORT=5000

   npm start



# Example
```bash
curl -X POST http://localhost:5000/api/addEvent \
  -H "Content-Type: application/json" \
  -d '{
    "eventType": "user_login",
    "sourceAppId": "app12345",
    "dataPayload": {
      "userId": "user67890",
      "loginTime": "2024-11-22T10:00:00Z",
      "ipAddress": "192.168.1.1"
    }
  }'





event-logging-system/
├── config/
│   └── db.js          # MongoDB connection setup
├── models/
│   └── eventLog.js    # Event Log Mongoose model
├── routes/
│   └── eventRoute.js  # API routes for events
├── utils/
│   ├── hashGenerator.js    # Utility to generate hashes
│   ├── schemaValidator.js  # Schema validation for events
│   └── webSocket.js        # WebSocket setup
├── .env               # Environment variables
├── server.js          # Entry point of the application
├── package.json       # Project metadata and dependencies
