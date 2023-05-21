const { getAllAuthors, createAuthor, readPostbyAuthor } = require("../../models/author.model");

const router = require("express").Router();

// Ruta para acceder a todos los autores registrados
router.get("/", async (req, res) => {
  try {
    const [result] = await getAllAuthors();
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// Ruta para obtener todos los Post registrados por un autor en particular
router.get("/:idAuthor", async (req, res) => {
  try {
    const [result] = await readPostbyAuthor(req.params.idAuthor);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// Ruta para crear un nuevo autor
router.post("/", async (req, res) => {
  try {
    const [result] = await createAuthor(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
