const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  // config static files: css/images/js
  app.use(express.static(path.join("./src", "public")));
};

// Tham chieu chu k phai thuc thi ham
module.exports = configViewEngine;
