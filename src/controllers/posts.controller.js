const BigPromise = require("../utils/BigPromise");

exports.getAllPosts = BigPromise(async (req, res) => {
    
    const FETCH_URL = "https://jsonplaceholder.typicode.com/posts";
    let posts = await fetchPostsFromFakeJSONAPI(FETCH_URL);


    async function fetchPostsFromFakeJSONAPI(FETCH_URL){
        const response = await fetch(FETCH_URL);
        const jsonData = await response.json();
        return jsonData.slice(0,20);
    }


    if (!posts) {
        throw new CustomError("No posts found", 404)
    }

    res.status(200).json({
        success: true,
        posts
    })
})