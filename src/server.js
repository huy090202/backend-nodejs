require("dotenv").config(); // Co su dung process.env thi phai de require("dotenv").config() tren cung
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine
configViewEngine(app);

// Khai bao route
app.use("/", webRoutes);

// Test connection

// simple query
// connection.query("SELECT * FROM Users u", function (err, results, fields) {
//   console.log(">>>results= ", results); // results contains rows returned by server
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port} ${hostname}`);
});
