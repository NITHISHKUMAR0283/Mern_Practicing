const express = require("express")
const router = express.Router();
const {registerUser,loginUser,logoutUser} = require("../controllers/authcontroller")
router.post("/signup",registerUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);

module.exports = router;

