const express = require("express");
const app = express();
const isDev = process.env.FUNCTIONS_EMULATOR == "true";
const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
if (isDev) {
  app.use(cors);
}

// Routes (Organize your routes under /api):
// Hello World
app.use('/api/hello-world',require("./routes/hello-world"));

exports.app = functions.https.onRequest(app);
