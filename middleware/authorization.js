const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {

    const jwtToken = req.header("token");

    if (!jwtToken) {

        return res.status(403).json("Not Authorized");
    }

    try {


        //check valid token
        const paylod = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = paylod.user;

        next();

    } catch (error) {
        console.error(error.message);
        return res.status(403).json("Not Authorized");
    }
};
