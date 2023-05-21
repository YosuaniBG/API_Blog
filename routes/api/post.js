const { bodyValidatorPost } = require("../../helpers/validators.helper");
const { validate } = require("../../middlewares/validator");
const {
  getAllPostsWithAuthor,
  createPost,
} = require("../../models/post.model");

const router = require("express").Router();

//Devuelve todos los post de la BBDD
router.get("/", async (req, res) => {
  try {
    const [result] = await getAllPostsWithAuthor();

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", bodyValidatorPost, validate, async (req, res) => {
  try {
    const [result] = await createPost(req.body);

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
