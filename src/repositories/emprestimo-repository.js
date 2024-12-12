import { database } from "./database.js";


export const findAll = () => database.emprestimos;

export const findById = (id) => database.emprestimos.find(emprestimo => emprestimo.id === id);

export const save = (emprestimo) => database.emprestimos.push(emprestimo);

export const update = (id, cpfUsuario, idLivro, dataEmprestimo, dataDevolucao) => {
    const emprestimo = findById(id);
    emprestimo.cpfUsuario = cpfUsuario;
    emprestimo.idLivro = idLivro;
    emprestimo.dataEmprestimo = dataEmprestimo;
    emprestimo.dataDevolucao = dataDevolucao;
};

export const remove = (id) => {
    const index = database.emprestimos.findIndex(emprestimo => emprestimo.id === id);
    database.emprestimos.splice(index,1);
}