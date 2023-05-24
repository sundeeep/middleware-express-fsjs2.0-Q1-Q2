const JWT = require("jsonwebtoken");
const BigPromise = require("../utils/BigPromise.js");
require('dotenv').config();

const isLoggedIn = BigPromise(async (req, res, next) => {
    let cookieToken;

    if (req.cookies.token || (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) ) {
        cookieToken = req.cookies.token || req.headers.authorization.split(" ")[1]
    }

    if (!cookieToken) {
        throw new Error("Sorry! You are not authorized to access the posts")
    }

    try {
        const decryptedJWT = JWT.verify(cookieToken, process.env.JWT_SECRET);
        console.log(decryptedJWT)
         req.user = await User.findById(decryptedJWT._id, "name email role")
         console.log(req.user)
         next() //proceed to the posts controller to retrieve the posts
    } catch (error) {
        throw new Error("Sorry! You are not authorized to access the posts")
    }
    
})

module.exports = isLoggedIn;