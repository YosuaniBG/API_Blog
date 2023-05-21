const { bodyValidatorAuthor, paramsValidator } = require("../../helpers/validators.helper");
const { validate } = require("../../middlewares/validator");
const { getAllAuthors, createAuthor, readPostbyAuthor } = require("../../models/author.model");

const router = require("express").Router();

// Ruta para acceder a todos los autores registrados
router.get("/", async (req, res) => {
  try {
    const [result] = await getAllAuthors();

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para obtener todos los Post registrados por un autor en particular
router.get("/:idAuthor?", paramsValidator, validate, async (req, res) => {
  try {
    const [result] = await readPostbyAuthor(req.params.idAuthor);

    console.log(result[0]);
    if(result[0] === undefined){
      return res.status(404).json({msg:'No se encontro ningún autor con este ID'});
    }

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para crear un nuevo autor
router.post("/", bodyValidatorAuthor, validate, async (req, res) => {
  try {
    const [result] = await createAuthor(req.body);

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
