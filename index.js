// // CRUD with NODE 
// require("dotenv").config()
// const express = require("express")
// const app = express()
// const mongoose = require("mongoose")
// const session = require("express-session")
// const PORT = process.env.PORT || 5500

// const routes = require("./routes/router.js")
// app.set("view engine", "ejs")
// app.use("/", routes)
// app.set("no-cache", false)


// //
// // Middleware
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json());



// app.use(
//   session({
//     secret: "complex-secret-key",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // Database connection
// mongoose.connect(process.env.DB_URI, {
//     useNewUrlParser: true,

//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to the database"))
//   .catch((error) => console.error(error));

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });



// //logic
// // for image icon
// app.use(express.static("uploads"));

// // Start the server
// app.listen(PORT, () => {
//   console.log(`App is listening on http://localhost:${PORT}`);
// });
// CRUD with NODE 
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const PORT = process.env.PORT || 5500;

const routes = require("./routes/router.js");
const app = express();

// Middleware for parsing request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session middleware setup
app.use(
  session({
    secret: "complex-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Set view engine
app.set("view engine", "ejs");

// Serve static files (like uploaded images)
app.use(express.static("uploads"));

// Database connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.error("Database connection error:", error));

// Use routes after session and body parsers are set up
app.use("/", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
