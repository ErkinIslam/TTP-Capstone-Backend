const router = require("express").Router();
const authorization = require("../middleware/authorization");
const pool = require("../db");


router.get("/", authorization, async (req, res) => {
  try {
      //gets sandwiches id and name relevant to the user
        const user = await pool.query(
            "SELECT sandwich_id, sandwich_name FROM user_sandwich WHERE uid = $1",
            [req.user.id] 
        ); 
        
        res.json(user.rows);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
     }
});

module.exports = router;