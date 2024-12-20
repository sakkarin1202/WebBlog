const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const { upload } = require("../middlewares/file.middleware");
const authJwt = require("../middlewares/authJwt.middleware");

//http://localhost:5000/api/v1/post
router.post("", authJwt.verifyToken, upload, postController.createPost);
router.get("",postController.getPosts);
router.get("/:id",postController.getPostById);
module.exports = router;
