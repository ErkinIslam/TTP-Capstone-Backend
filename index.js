const express = require ("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//port for heroku
var PORT = process.env.PORT || 5000;

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("build"));
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname,  "build", "index.html"));
//     });
// }

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


app.listen(PORT, () => {
    console.log("server has started on port 5000")
});

