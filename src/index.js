
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

    let opc = input('Digite a opção: ');

    console.clear();
    
    switch (opc) {
        case "0":
            
            break;
        case "1":
            menuLivros();
            break;
        case "2":
            
            menuPrincipal();
            break;
        case "3":
            menuPrincipal();
            break;
    }
}

export default menuPrincipal;

menuPrincipal();

