import prompt from "prompt-sync";
import menuPrincipal from "../index.js";
import { usuarios } from "../../data/usuarios.js";

function cadastrarUsuarios() {
    const input = prompt();
    const user = {};
    console.log("+-------------------------+");
    console.log("| Cadastrar Usuário       |");
    console.log("+-------------------------+");
    user.cpf = input("Digite o CPF do usuário: ");
    user.nome = input("Digite o nome do usuário: ");
    user.telefone = input("digite o telefone do usuário: ");
    user.email = input("digite o e-mail do usuário: ");
    console.log("+-------------------------+");
    console.log("| Cadastro Realizado!     |");
    console.log("+-------------------------+");
    usuarios.push(user);
}
function editarUsuario(){
    const input = prompt();
    console.log("+-------------------------+");
    console.log("| Editar Usuário          |");
    console.log("+-------------------------+");
    const cpf = input("Digite o CPF do usuário: ");
    const index = usuarios.findIndex(usuario => usuario.cpf === cpf)
    if(index >= 0){
        const cpf = input("| * CPF: ")
        const nome = input("| * Nome: ")
        const telefone = input("| * Telefone: ")
        const email = input("| * E-mail: ")
        usuarios[index] = { ...usuarios[index],cpf, nome, telefone, email};
        console.log("+------------------------------+");
        console.log("| Usuário editado com sucesso  |");
        console.log("+------------------------------+");
    } else{
        console.log("+----------------------------+");
        console.log("| Edição falhou!             |");
        console.log("+----------------------------+");
    }
}
function excluirUsuarios(){
    const input = prompt();
    console.log("+-------------------------+");
    console.log("| Excluir Usuário         |");
    console.log("+-------------------------+");
    const cpf = input(`Digite o CPF do Usuário: `);
    const index = usuarios.findIndex(usuario => usuario.cpf === cpf)
    if (index >= 0){
        usuarios.splice(index, 1);
        console.log("+------------------------------+");
        console.log("| Usuário excluído com sucesso |");
        console.log("+------------------------------+");
    } else{
        console.log("Usuário não encontrado! ")
    }
    console.log("+----------------------------------------------+");
    console.log("| Usuários cadastrados:                        |");
    console.log("+----------------------------------------------+");
    usuarios.forEach(usuario => {
        console.log(`| CPF: ${usuario.cpf} /  NOME: ${usuario.nome} |`)
        console.log("+----------------------------------------------+");
    })
}
function listarUsuarios() {
    //vou em cada usuário e extraio cpf e nome
    console.log("+-------------------------------------------------------+");
    console.log("| Usuários cadastrados:                                 |");
    console.log("+-------------------------------------------------------+");
    usuarios.forEach(usuario => {
        console.log(`| CPF: ${usuario.cpf} /  NOME: ${usuario.nome} |`)
        console.log("+-------------------------------------------------------+");
    })
}
function buscarCPF(){
    const input = prompt();
    console.log("+--------------------------+");
    const cpf = input("| Digite o CPF do usuário: | ");
    console.log("+--------------------------+");
    const users = usuarios.find(usuario => usuario.cpf === cpf);
    console.log("+--------------------------+");
    console.log(`| CPF: ${users.cpf} | `);
    console.log(`| NOME: ${users.nome} | `);
    console.log(`| TELEFONE: ${users.telefone} | `);
    console.log(`| E-MAIL: ${users.email} | `);
    console.log("+--------------------------+");
}

function menuUsuario() {
    const input = prompt();
    
    const options = [
        "+--------------------------------+",
        "| Menu Usuários                  |",
        "+--------------------------------+",
        "|1 - Cadastrar Usuário           |",
        "|2 - Editar Usuário              |",
        "|3 - Excluir Usuário             |",
        "|4 - Listar todos os Usuários    |",
        "|5 - Buscar Usuário por CPF      |",
        "|0 - Retornar ao menu principal  |",
        "+--------------------------------+"
    ]

    const userMenu = options.join("\n");
    console.log(userMenu);
    let opc = input("digite a opção: ")

    console.clear();
    switch (opc) {
        case "0":
            menuPrincipal();
            break;
        case "1":
            cadastrarUsuarios();
            menuUsuario();
            break;
        case "2":
            editarUsuario()
            menuUsuario();
            break;
        case "3":
            excluirUsuarios()
            menuUsuario();
            break;
        case "4":
            listarUsuarios();
            menuUsuario();
            break;
        case "5":
            buscarCPF();
            menuUsuario();
            break;
    }
}

export default menuUsuario;