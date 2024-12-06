let pessoa = {};
let dados = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor"
};

for (let chave in dados) {
    pessoa[chave] = dados[chave];
}

console.log(pessoa);
