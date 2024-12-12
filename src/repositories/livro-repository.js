import { database } from "./database.js";


export const findAll = () => database.livros;

export const findById = (id) => database.livros.find(livro => livro.id === id);

export const save = (livro) => database.livros.push(livro);

export const update = (id, titulo, autor, editora, emprestado) => {
    const livro = findById(id);
    livro.titulo = titulo;
    livro.autor = autor;
    livro.editora = editora;
    livro.emprestado = emprestado;
};

export const remove = (id) => {
    const index = database.livros.findIndex(livro => livro.id === id);
    database.livros.splice(index,1);
}