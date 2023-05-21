const {
  getAllPostsWithAuthor,
  createPost,
} = require("../../models/post.model");

const router = require("express").Router();

//Devuelve todos los post de la BBDD
router.get("/", async (req, res) => {
  try {
    const [result] = await getAllPostsWithAuthor();
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const [result] = await createPost(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
