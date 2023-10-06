const express = require("express");
const {
  getHomePage,
  getAbc,
  getTest,
  postCreatUser,
  getCreateUsers,
  getUpdateUsers,
  postUpdateUser,
  postDeleteUser,
  confirmDelete,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/abc", getAbc);
router.get("/test", getTest);

// Create a new user
router.post("/create-user", postCreatUser); // Form
router.get("/createUsers", getCreateUsers);

// Update a user
router.get("/updateUsers/:id", getUpdateUsers);
router.post("/update-user", postUpdateUser); // Form

// Delete a user
router.post("/delete/:id", postDeleteUser); // Form chua button delete
router.post("/delete-user", confirmDelete);

module.exports = router; // export default
