
// Importações necessárias
import PromptSync from "prompt-sync";
import utils from "../utils/format-util.js";
import menuPrincipal from "./main-view.js";
import livroController from "../controllers/livro-controller.js";

// Inicializando o prompt
const prompt = PromptSync();
const width = 80;


/**
 * Cadastra um novo livro no sistema.
 * Solicita os dados do livro (ID, Título, Autor e Editora) e os envia para o controlador.
 */
const cadastrarLivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Cadastrar livro", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const titulo = prompt("| * Título: ");
    const autor = prompt("| * Autor: ");
    const editora = prompt("| * Editora: ");
    livroController.save({ id, titulo, autor, editora });
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Livro cadastrado com sucesso!", width));
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    livroView();
};

/**
 * Edita os dados de um livro existente.
 * Busca o livro pelo CPF e permite alterar os dados (Título, Autor e Editora).
 * Mantém os valores atuais caso o livro pressione Enter sem digitar nada.
 */
const editarLivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Editar livro", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const livro = livroController.findById(id);
    if (livro) {
        console.log(utils.formatMessage(`Título: ${livro.titulo}`, width));
        console.log(utils.formatMessage(`Autor: ${livro.autor}`, width));
        console.log(utils.formatMessage(`Editora: ${livro.editora}`, width));
        console.log(utils.createBase(width));
        const titulo = prompt("| * Novo Título: ") || livro.titulo;
        const autor = prompt("| * Novo Autor: ") || livro.autor;
        const editora = prompt("| * Novo Editora: ") || livro.editora;
        const userUpdate = { id, titulo, autor, editora };
        livroController.save(userUpdate);
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("livro editado com sucesso!", width));
        console.log(utils.createBase(width));
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("livro não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    livroView();
};

/**
 * Exclui um livro do sistema.
 * Busca o livro pelo ID e solicita confirmação antes de removê-lo.
 */
const excluirLivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Excluir livro", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const livro = livroController.findById(id);
    if (livro) {
        console.log(utils.formatMessage(`Título: ${livro.titulo}`, width));
        console.log(utils.formatMessage(`Autor: ${livro.autor}`, width));
        console.log(utils.formatMessage(`Editora: ${livro.editora}`, width));
        console.log(utils.createBase(width));
        const confirmacao = prompt("| * Deseja realmente excluir? (s/n): ");
        if (confirmacao === "s") {
            livroController.remove(id);
            console.log(utils.createBase(width));
            console.log(utils.formatMessage("livro excluído com sucesso!", width));
            console.log(utils.createBase(width));
        }
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Livro não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    livroView();
};

/**
 * Lista todos os livros cadastrados no sistema.
 * Exibe as informações de cada livro (CPF, Título, Autor e Editora).
 */
const listarLivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Todos os livros", width));
    console.log(utils.createBase(width));
    livroController.findAll().forEach(livro => {
        console.log(utils.formatMessage(`ID: ${livro.id}`, width));
        console.log(utils.formatMessage(`Título: ${livro.titulo}`, width));
        console.log(utils.formatMessage(`Autor: ${livro.autor}`, width));
        console.log(utils.formatMessage(`Editora: ${livro.editora}`, width));
        console.log(utils.formatMessage("", width));
    });
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    livroView();
};

/**
 * Busca um livro pelo CPF.
 * Exibe as informações do livro encontrado (Título, Autor e Editora).
 */
const buscarLivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Buscar livro por ID", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const livro = livroController.findById(id);
    if (livro) {
        console.log(utils.formatMessage(`Título: ${livro.titulo}`, width));
        console.log(utils.formatMessage(`Autor: ${livro.autor}`, width));
        console.log(utils.formatMessage(`Editora: ${livro.editora}`, width));
        console.log(utils.createBase(width));
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Livro não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    livroView();
};








const livroView = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Menu Livros", width));
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("1 - Cadastrar livro", width));
    console.log(utils.formatMessage("2 - Editar livro", width));
    console.log(utils.formatMessage("3 - Excluir livro", width));
    console.log(utils.formatMessage("4 - Listar todos os livros", width));
    console.log(utils.formatMessage("5 - Buscar livro por ID", width));
    console.log(utils.formatMessage("0 - Retornar ao menu principal", width));
    console.log(utils.createBase(width));
    const opcao = prompt("| * Digite a opção desejada: ");
    switch (opcao) {
        case "0":
            menuPrincipal();
        case "1":
            cadastrarLivro();
            break;
        case "2":
            editarLivro();
            break;
        case "3":
            excluirLivro();
            break;
        case "4":
            listarLivro();
            break;
        case "5":
            buscarLivro();
            break;
        default:
            livroView();
    }
};

// Exporta a visualização de livros
export default livroView;

