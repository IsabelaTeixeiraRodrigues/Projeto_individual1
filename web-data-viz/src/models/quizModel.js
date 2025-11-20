var database = require("../database/config");

function salvarResultado(idUsuario, idQuiz, pontuacao) {
    var instrucao = `
        INSERT INTO resultado_quiz (idUsuario, idQuiz, pontuacao) VALUES (${idUsuario}, ${idQuiz}, '${pontuacao}');
    `;

    return database.executar(instrucao);
}
function obterMedias() {
    var instrucao = `
        SELECT 
            idQuiz,
            AVG(pontuacao) AS media
        FROM resultado_quiz
        WHERE idQuiz IN (16,17,18)
        GROUP BY idQuiz;
    `;
    return database.executar(instrucao);
}

function obterTopPersonalidade() {
    var instrucao = `
        SELECT 
            pontuacao AS resultado,
            COUNT(*) AS qtd
        FROM resultado_quiz
        WHERE idQuiz IN (19,20)
        GROUP BY pontuacao
        ORDER BY qtd DESC;
    `;
    return database.executar(instrucao);
}

module.exports = {
    salvarResultado, 
    obterMedias,
    obterTopPersonalidade
};

