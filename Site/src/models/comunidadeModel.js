var database = require("../database/config");

function listar() {
    var sql = `
        SELECT 
            m.id AS idcomunidade,
            m.titulo,
            m.descricao,
            u.Nickname AS nome
        FROM mensagem m
        JOIN usuario u ON m.fk_usuario = u.idUsuario
        ORDER BY m.id DESC;
    `;
    return database.executar(sql);
}

function listarPorUsuario(idUsuario) {
    var sql = `
        SELECT 
            m.id AS idcomunidade,
            m.titulo,
            m.descricao
        FROM mensagem m
        WHERE m.fk_usuario = ${idUsuario};
    `;
    return database.executar(sql);
}

function pesquisarDescricao(texto) {
    var sql = `
        SELECT 
            m.id AS idcomunidade,
            m.titulo,
            m.descricao,
            u.Nickname AS nome
        FROM mensagem m
        JOIN usuario u ON m.fk_usuario = u.idUsuario
        WHERE m.descricao LIKE '%${texto}%';
    `;
    return database.executar(sql);
}

function publicar(titulo, descricao, idUsuario) {
    var sql = `
        INSERT INTO mensagem (titulo, descricao, fk_usuario)
        VALUES ('${titulo}', '${descricao}', ${idUsuario});
    `;
    return database.executar(sql);
}
function deletar(idcomunidade) {
    var sql = `
        DELETE FROM mensagem WHERE id = ${idcomunidade};
    `;
    return database.executar(sql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    deletar
};
