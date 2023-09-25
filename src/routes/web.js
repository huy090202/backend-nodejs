const express = require("express");
const {
  getHomePage,
  getAbc,
  getTest,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/abc", getAbc);
router.get("/test", getTest);

module.exports = router; // export default
