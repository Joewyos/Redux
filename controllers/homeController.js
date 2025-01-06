const homeController = (req, res) => {
  const data = {
    name: "Joe",
    userId: 3,
  };
  res.render("index", data);
};

export { homeController };
