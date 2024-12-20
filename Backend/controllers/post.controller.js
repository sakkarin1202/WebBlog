const PostModel = require("../models/Post");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET;

exports.createPost = async (req, res) => {
  //File upload
  const { path: cover } = req.file;
  const author = req.userId;
  const { title, summary, content } = req.body;
  if (!title | !summary || !summary) {
    return res.status(400).json({ message: "All Fileds is required" });
  }
  const postDoc = await PostModel.create({
    title,
    summary,
    content,
    cover,
    author,
  });
  res.json(postDoc);
};


exports.getPosts = async(req,res)=>{
  const posts = await PostModel.find().populate("author",["username"]).sort({"createdAt":-1}).limit(20)
  res.json(posts);
}


exports.getPostById = async (req, res) => {
  const { id } = req.params; 
  const postDoc = await PostModel.findById(id).populate("author",["username"]);
  res.json(postDoc)
};




