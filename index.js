const express = require ("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//====middleware====//
app.use(cors());
app.use(express.json()); //req.body
//====//


//====SANDWICH ROUTES====//

//create sandwich


//get all sandwiches made by the user


//get a specific sandwich made by the user


//update a specific sandwich made by the user


//delete a specific sandwich made by the user


//====//


//====user routes====//

//====//


app.listen(5000, () => {
    console.log("server has started on port 5000")
});

