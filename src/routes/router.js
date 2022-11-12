const express = require("express");
const { getAllAds } = require("../models/ads.model");
const router = express.Router();
router.get("/", async (req, res) => {
  const ads = await getAllAds();
  res.render("pages/index", { user: req.user, ads });
});
router.get("/login", (req, res) => {
  res.render("pages/login", { caution: "", user: req.user });
});
router.get("/register", (req, res) => {
  res.render("pages/register", { caution: "", user: req.user });
});
router.get("/display", (req, res) => {
  res.render("pages/display", { caution: "", user: req.user });
});
router.get("/edit", (req, res) => {
  res.render("pages/edit", { caution: "", user: req.user });
});

module.exports = router;
