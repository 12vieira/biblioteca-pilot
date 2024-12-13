import livroRepository from "../repositories/livro-repository.js";

/**
 * Controlador de Livros.
 * 
 * Responsável por intermediar as chamadas entre a camada de serviço e o repositório de livros.
 * Fornece métodos para salvar, remover, listar e buscar livros pelo ID.
 */
const livroController = {

    /**
     * Salva ou atualiza um livro.
     * 
     * @param {Object} livro - O livro a ser salvo.
     * @param {string} livro.id - O id do livro.
     * @param {string} livro.titulo - O título do livro.
     * @param {string} livro.autor - O autor do livro.
     * @param {string} livro.editora - A editora do livro.
     * @param {boolean} livro.emprestado - Se o livro está emprestado ou não.
     * @returns {void}
     */
    save: (livro) => livroRepository.save(livro),

    /**
     * Remove um livro pelo ID.
     * 
     * @param {string} id - ID do livro a ser removido.
     * @returns {void}
     */
    remove: (id) => livroRepository.remove(id),

    /**
     * Retorna uma lista com todos os livros.
     * 
     * @returns {Array<Object>} - Lista de livros cadastrados.
     */
    findAll: () => livroRepository.findAll(),

    /**
     * Busca um livro pelo ID.
     * 
     * @param {string} id - ID do livro a ser buscado.
     * @returns {Object|null} - Objeto do livro encontrado ou null se não existir.
     */
    findById: (id) => livroRepository.findById(id)

}

export default livroController;