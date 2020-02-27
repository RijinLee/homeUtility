const path = require("path");
const express = require("express");
const morgan = require("morgan");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;
module.exports = app;
// require("https").globalAgent.options.ca = require("ssl-root-cas/latest").create();
/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
if (process.env.NODE_ENV !== "production") require("../secrets");

// LOGGING MIDDLEWARE
app.use(morgan("dev"));

// BODY PARSING MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// COMPRESSION MIDDLEWARE
app.use(compression());

// AUTH & API ROUTES
// app.use("/auth", require("./auth"));
// app.use("/api", require("./api"));
app.use("/hue", require("./hue"));

// STATIC FILE SERVING MIDDLEWARE
app.use(express.static(path.join(__dirname, "..", "public")));

// ANY REMAINING REQUESTS WITH AN EXTENSION (.js, .css, etc.) SEND 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// SENDS INDEX.HTML
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// ERROR HANDLING ENDWARE
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// APP IS LISTENING
app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
