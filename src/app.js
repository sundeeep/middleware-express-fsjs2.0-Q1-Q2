const express = require("express");
require('dotenv').config();
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))
app.use(cors());
// //TODO: Cookies 
app.use(cookieParser());

const authRouter = require("./routers/auth.router");
const postsRouter = require("./routers/posts.router");

app.use('/api/v1/', authRouter)
app.use('/api/v1/', postsRouter);

app.get('/',(req,res)=>{
    res.status(200).json({
        success: true,
        author: "Sandeep K. Dasari",
    })
})

module.exports = app;