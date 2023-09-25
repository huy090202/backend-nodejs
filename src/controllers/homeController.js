const getHomePage = (req, res) => {
  res.render("sample.ejs");
};

const getAbc = (req, res) => {
  res.send("Check ABC");
};

const getTest = (req, res) => {
  res.send("<h1>Pham Dang Huy</h1>");
};

module.exports = {
  getHomePage,
  getAbc,
  getTest,
};
