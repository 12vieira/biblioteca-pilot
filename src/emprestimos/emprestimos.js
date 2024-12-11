import prompt from "prompt-sync";
import menuPrincipal from "../index.js";
import { livros } from "../../data/livros.js";
import { usuarios } from "../../data/usuarios.js";
import { emprestimos } from "../../data/emprestimos.js";

const input = prompt();

function realizarEmprestimo(){
    console.log("+----------------------------------------+");
    console.log("| Realizar Empréstimo                    |");
    console.log("+----------------------------------------+");
    const lender = {};
    lender.id = input("Digite o ID: ");
    lender.cpfUsuario = input("Digite o CPF: ");
    lender.idLivro = input("Digite o ID do livro: ");
    lender.dataEmprestimo = Date.now()
    //lender.dataEmprestimo = input("Digite a data de empréstimo: ");
    lender.dataDevolucao = input("Digite a data de devolução: ");
    emprestimos.push(lender);
    const lendBook = livros.find(livro => livro.id === lender.idLivro);
    lendBook.emprestado = true;
    console.log("+----------------------------------------+");
    console.log("| Empréstimo Realizado                   |");
    console.log("+----------------------------------------+");

}


function listarEmprestimos(){
    console.log("+----------------------------------------+");
    console.log("| Todos os Empréstimos                   |");
    console.log("+----------------------------------------+");
    emprestimos.forEach(emprestimo => {
        const usuario = usuarios.find(usuario => usuario.cpf === emprestimo.cpfUsuario);
        const livro = livros.find(livro => livro.id === emprestimo.idLivro);
        console.log(`| ID: ${emprestimo.id} - Data de Empréstimo: ${emprestimo.dataEmprestimo}`)
        console.log(`| Usuário: ${usuario.nome} - Livro: ${livro.titulo} \n`);
    });
    console.log("+----------------------------------------+");
    console.log("| Empréstimos Realizado!                 |");
    console.log("+----------------------------------------+");
}

function menuEmprestimo() {
    const input = prompt();
    
    const options = [
        "+----------------------------------------+",
        "| Menu Empréstimo                         |",
        "+----------------------------------------+",
        "|1 - Realizar Empréstimo                 |",
        "|2 - Renovar Empréstimo                  |",
        "|3 - Realizar Devolução                  |",
        "|4 - Listar todos os Empréstimos         |",
        "|5 - Buscar Empréstimo por ID            |",
        "|0 - Retornar ao menu principal          |",
        "+----------------------------------------+"
    ]

    const lendMenu = options.join("\n");
    console.log(lendMenu);
    let opc = input("digite a opção: ")

    console.clear();
    switch (opc) {
        case "0":
            menuPrincipal();
            break;
        case "1":
            realizarEmprestimo();
            menuEmprestimo();
            break;
        case "2":
            renovarEmprestimo()
            menuEmprestimo();
            break;
        case "3":
            realizarDevolucao()
            menuEmprestimo();
            break;
        case "4":
            listarEmprestimos();
            menuEmprestimo();
            break;
        case "5":
            buscarId();
            menuEmprestimo();
            break;
    }
}

export default menuEmprestimo;