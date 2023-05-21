const { body, param } = require("express-validator");

const bodyValidatorPost = [
  body("title")
    .notEmpty()
    .withMessage("Debe incluir el Título"),
  body("description")
    .notEmpty()
    .withMessage("Debe incluir la Descripción"),
  body("category")
    .notEmpty()
    .withMessage("Debe incluir la Categoría"),
  body("author")
    .notEmpty()
    .withMessage("Debe incluir el Id del Autor")
    .isInt()
    .withMessage("Debe ser un número"),
];

const bodyValidatorAuthor = [
    body("name")
      .notEmpty()
      .withMessage("Debe incluir el Nombre"),
    body("email")
      .isEmail()
      .withMessage("Debe incluir el Email o el Email no es válido"),
    body("image")
      .notEmpty()
      .withMessage("Debe incluir una Imagen"),
  ];


const paramsValidator = [
  param("idAuthor")
    .notEmpty()
    .withMessage("Debe incluir el ID del Autor"),
];

module.exports = { 
    bodyValidatorPost, 
    bodyValidatorAuthor, 
    paramsValidator 
};
