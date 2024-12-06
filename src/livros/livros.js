
import prompt from "prompt-sync";
import menuPrincipal from "../index.js";
import { livros } from "../../data/livros.js";

function cadastrarLivros() {
    const input = prompt();
    const book = {};
    book.id = Math.floor(Math.random()*1000000).toString();
    book.titulo = input("Digite o titulo do livro: ");
    book.autor = input("digite o autor do livro: ");
    book.editora = input("digite a editora do livro: ");
    book.emprestado = false;

    livros.push(book);
}
function listarLivros() {
    //vou em cada livro e extraio id e titulo
    livros.forEach(livro => {
        console.log(`ID: ${livro.id} / Título: ${livro.titulo}`)
    })
}
function excluirLivros(){
    livros.pop();
    livros.forEach(livro => {
        console.log(`ID: ${livro.id} / Título: ${livro.titulo}`)
    })
}

function menuLivros() {
    const input = prompt();
    
    const options = [
        "1 - Cadastrar Livro",
        "2 - Editar Livro",
        "3 - Excluir Livro",
        "4 - Listar todos os livros",
        "5 - Buscar livro por ID",
        "0 - Retornar ao menu principal"
    ]

    const booksMenu = options.join("\n");
    console.log(booksMenu);
    let opc = input("digite a opção: ")

    console.clear();
    switch (opc) {
        case "0":
            menuPrincipal();
            break;
        case "1":
            cadastrarLivros();
            menuLivros();
            break;
        case "2":
            
            menuLivros();
            break;
        case "3":
            excluirLivros()
            menuLivros();
            break;
        case "4":
            listarLivros();
            menuLivros();
            break;
        case "5":
            
            menuLivros();
            break;
    }
}

export default menuLivros;

