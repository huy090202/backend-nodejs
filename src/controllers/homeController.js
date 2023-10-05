const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDservices");

const getHomePage = async (req, res) => {
  // Chuyen huong sang views home.ejs
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results }); // x <- y
};

const getAbc = (req, res) => {
  res.send("Check ABC");
};

const getTest = (req, res) => {
  res.render("sample.ejs");
};

// Create a new user
const postCreatUser = async (req, res) => {
  // Lay duoc data thong qua req.body
  // console.log(">>check req.body: ", req.body);

  // Lay ra gia tri email, name, city
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;

  // or ngan gon hon de lay gia tri email, name, city
  // let { email, name, city } = req.body;
  // console.log("email= ", email, "name= ", name, "city= ", city);

  // create a users cu phap cu
  // connection.query(
  //   `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Create user succseed!");
  //   }
  // );

  // thuc hanh cu phap moi trong viec tao users
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
    [email, name, city]
  );
  res.send("Create user succseed!");
};

const getCreateUsers = (req, res) => {
  // Chuyen huong sang views createUsers.ejs
  return res.render("createUsers.ejs");
};

const getUpdateUsers = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  // Chuyen huong sang views editUsers.ejs
  return res.render("editUsers.ejs", { userEdit: user }); // x <- y
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  let userId = req.body.userId;

  await updateUserById(email, name, city, userId);

  // res.send("Update user succseed!");
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getAbc,
  getTest,
  postCreatUser,
  getCreateUsers,
  getUpdateUsers,
  postUpdateUser,
};
