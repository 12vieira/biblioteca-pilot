
// npm init -y, no package.json 
// mudar 'test' => "start": "node ./src/index.js", nome da pasta
// import prompt from "prompt-sync" => const input = prompt(); => let test = input("digite seu nome");

import prompt from "prompt-sync"
import menuLivros from "./livros/livros.js"

function menuPrincipal() {
    const input = prompt();
    const opcoes = [   
    "1 - Menu livros",
    "2 - Menu usuarios" ,
    "3 - Menu emprestimos",
    "0 - Sair"
];
    const menu = opcoes.join("\n");
    console.log(menu)
    let opc = input('Digite a opção: ')
    if (opc == 1){
        menuLivros();
    } else{
        menuPrincipal();
    }
}

export default menuPrincipal;

menuPrincipal();

