const express = require("express");
const {
  httpPostRegisterUser,
  httpPostLogin,
  httpGetLogout,
} = require("../controllers/user/user.controller");
const userRouter = express.Router();

userRouter.get("/logout", httpGetLogout);

userRouter.post("/register", httpPostRegisterUser);
userRouter.post("/auth", httpPostLogin);

module.exports = userRouter;
