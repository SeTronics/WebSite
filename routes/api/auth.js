const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");

//@route        GET api/auth
//@desc         Test route
//@acess        public
router.get("/", auth, async (req, res) => {
  try {
    const user = User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
