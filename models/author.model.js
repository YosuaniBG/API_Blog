
// Obtener todos Authores 
const getAllAuthors = () => {
    return db.query('SELECT * FROM authors');
}

//Consulta para CREAR un Author
const createAuthor = ({name, email, image}) =>{
    return db.query('INSERT INTO authors (name, email, image) VALUES (?,?,?)', 
    [name, email, image]);
};

//Consulta para LEER un POST
const readPostbyAuthor = (id) => {
    return db.query('SELECT * FROM posts WHERE id_author = ?',
    [id]);
}





module.exports = {
    getAllAuthors,
    createAuthor,
    readPostbyAuthor
}