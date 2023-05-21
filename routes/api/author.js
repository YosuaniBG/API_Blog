const { getAllAuthors, createAuthor, readPostbyAuthor } = require("../../models/author.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const [result] = await getAllAuthors();
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.get("/:idAuthor", async (req, res) => {
  try {
    const [result] = await readPostbyAuthor(req.params.idAuthor);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const [result] = await createAuthor(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
