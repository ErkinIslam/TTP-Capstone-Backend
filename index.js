const express = require ("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { all } = require("./routes/jwtAuth");

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


//====ROUTES====//

//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

//user home  route
//app.use("/userHomePage", require("./routes/userHomePage"));

//==//

//====INGREDIENT ROUTES====//

//get all ingredients
app.get("/ingredients",async (req, res) => {
    try {

        const allIngredients = await pool.query(
            "SELECT * FROM ingredients"
        )
        res.json(allIngredients.rows);

    } catch (error) {
        console.error(error.message)
    }
    
})

//insert an ingredient into db
app.post("/ingredients/:type&:ingr",async (req, res) => {
    try {
        const {type} = req.params.type;
        const {ingr} = req.params.ingr;
        const ingredients = await pool.query(
            "INSERT INTO ingredients(ing_type, ing_name) VALUES ($1, $2) RETURNING *",
            [type, ingr]
        )
        res.json(ingredients.rows[0]);

    } catch (error) {
        console.error(error.message)
    }
})




//get an ingredients id based off description 
// example get beef id by entering beef

//get all ingredients off one type


//==//

//====SANDWICH ROUTES====//

//create sandwich
app.post("/sandwiches/:uid", async (req, res) => {
    try {
        const {uid} = req.params;

        //create a new sandwich in user sandwich
        const newSandwich = await pool.query(
          //  "INSERT INTO "
        )

        //that id needs to be used in the sandwich ingredients table 
        //insert into sandwich ingredients the ingredients used 

        //need ingredient ids...
        //put params into an arr and loop over all ingrediens(params) untill all are used in an insert query ?

    } catch (error) {
        console.error(error.message)
    }
})

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

