const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorization = require("../middleware/authorization");

//register
router.post("/register", validInfo, async (req, res) => {
  const { user_email, username, user_password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM user_profile WHERE user_email = $1", [
      user_email
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(user_password, salt);

    let newUser = await pool.query(
      "INSERT INTO user_profile (username, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
      [username, user_email, bcryptPassword]
    );
      //console.log(username, user_email, bcryptPassword)
    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error1");
  }
});


//login
router.post("/login", validInfo, async (req, res) => {
  const { user_email, user_password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM user_profile WHERE user_email = $1", [
      user_email
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Email is incorrect");
    }

    const validPassword = await bcrypt.compare(
      user_password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Password is incorrect");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error2");
  }
});

//verification
router.get("/is-verify", authorization, async (req, res) => {
  try {
      res.json(true);
  }catch (error) {
      
      console.error(error.message)
      res.status(500).send("Server Error");
  }
})

module.exports = router;