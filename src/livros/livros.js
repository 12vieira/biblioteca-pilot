
import prompt from "prompt-sync";
import menuPrincipal from "../index.js";

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
    console.log(booksMenu)
    let opc = input("digite a opção: ")
    if(opc == 0){
        menuPrincipal();
    } else if(opc == 1){
        let a = 0; let b = 0; let c = 0; let d = 0;let e = 0;
        a = input("Digite o ID do livro: ");
        b = input("Digite o titulo do livro: ")
        c = input("digite o autor do livro: ")
        d = input("digite a editora do livro: ")
        e = input("o livro está emprestado? ")
        const book = {
            id: a,
            titulo: b,
            autor: c,
            editora: d,
            emprestado: e
        }
        menuLivros();
    } else if(opc == 4){
        console.log(book);
    }
    else{
        menuLivros();
    }
}

export default menuLivros;