import { database } from "./database.js";

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
}




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