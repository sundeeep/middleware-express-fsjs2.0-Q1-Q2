const express = require("expres");
const isLoggedIn = require("../middlewares/isLoggedIn.middleware");
const {getAllPosts} = require("../controllers/posts.controller");

const router = express.Router();

router.route('/posts').get(isLoggedIn, getAllPosts);

module.exports = router;