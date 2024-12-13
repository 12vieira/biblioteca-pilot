/*import { database } from "./database.js";

export const usuarioRepository = {
    //listar todos
    findAll: () => database.usuarios,
    //listar cpf
    findByCpf: (cpf) => database.usuarios.find(usuario => usuario.cpf === cpf),
    //salvar
    save: (usuario) => database.usuarios.push(usuario),
    //atualizar
    update: (cpf, nome, fone, email) => {
        const usuario = findByCpf(cpf);
        usuario.nome = nome;
        usuario.fone = fone;
        usuario.email = email;
    },
    //remover
    remove: (cpf) => {
        const index = database.usuarios.findIndex(usuario => usuario.cpf === cpf);
        database.usuarios.splice(index,1)
    }
}*/




/*
export const findAll = () => database.usuarios;

export const findByCpf = (cpf) => database.usuarios.find(usuario => usuario.cpf === cpf);

export const save = (usuario) => database.usuarios.push(usuario);

export const update = (cpf, nome, fone, email) => {
    const usuario = findByCpf(cpf);
    usuario.nome = nome;
    usuario.fone = fone;
    usuario.email = email;
};

export const remove = (cpf) => {
    const index = database.usuarios.findIndex(usuario => usuario.cpf === cpf);
    database.usuarios.splice(index,1);
}*/


import database from './database.js';

/**
 * Repositório de usuários para manipular os dados armazenados no banco de dados.
 */
const usuarioRepository = {
    
    /**
     * Retorna todos os usuários no banco de dados.
     * @returns {Array} Lista de usuários.
     */
    findAll: () => database.usuarios,

    /**
     * Busca um usuário pelo CPF.
     * @param {string} cpf - O CPF do usuário a ser buscado.
     * @returns {Object|undefined} O usuário encontrado ou undefined se não encontrado.
     */
    findByCpf: (cpf) => {
        return database.usuarios.find(usuario => usuario.cpf === cpf);
    },

    /**
     * Salva um novo usuário no banco de dados.
     * @param {Object} usuario - O usuário a ser salvo.
     * @param {string} usuario.cpf - O CPF do usuário.
     * @param {string} usuario.nome - O nome do usuário.
     * @param {string} usuario.fone - O telefone do usuário.
     * @param {string} usuario.email - O email do usuário.
     * @returns {Object} - O usuário salvo.
     */
    save: (usuario) => {
        const isUserExists = usuarioRepository.findByCpf(usuario.cpf)
        if (isUserExists) {
            Object.assign(isUserExists, usuario);
            return isUserExists;
        } else {
            database.usuarios.push(usuario);
            return usuario;
        }
    },

    /**
     * Remove um usuário do banco de dados pelo CPF.
     * @param {string} cpf - O CPF do usuário a ser removido.
     */
    remove: (cpf) => {
        const index = database.usuarios.findIndex(usuario => usuario.cpf === cpf);
        if (index !== -1) {
            database.usuarios.splice(index, 1);
        } else {
            throw new Error(`Usuário com CPF ${cpf} não encontrado.`);
        }
    }
};

export default usuarioRepository;
