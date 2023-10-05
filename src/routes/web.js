const express = require("express");
const {
  getHomePage,
  getAbc,
  getTest,
  postCreatUser,
  getCreateUsers,
  getUpdateUsers,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/abc", getAbc);
router.get("/test", getTest);

// Create a new user
router.post("/create-user", postCreatUser); // Form
router.get("/createUsers", getCreateUsers);

// Update a new user
router.get("/updateUsers/:id", getUpdateUsers);
router.post("/update-user", postUpdateUser); // Form

module.exports = router; // export default
