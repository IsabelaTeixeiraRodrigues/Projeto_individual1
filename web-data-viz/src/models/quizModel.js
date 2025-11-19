var database = require("../database/config");

function salvarResultado(idUsuario, idQuiz, pontuacao) {
    console.log("ACESSEI O QuizModel. Enviando dados para o banco.");
    console.log("Usuário:", idUsuario, "| Quiz:", idQuiz, "| Pontuação:", pontuacao);

    var instrucao = `
        INSERT INTO resultado_quiz (idUsuario, idQuiz, pontuacao) VALUES (${idUsuario}, ${idQuiz}, '${pontuacao}');
    `;

    return database.executar(instrucao);
}

module.exports = {
    salvarResultado
};

function obterMedias() {
    var instrucao = `
        SELECT 
            idQuiz,
            AVG(CAST(pontuacao AS DECIMAL)) AS media
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
        ORDER BY qtd DESC
        LIMIT 3;
    `;
    return database.executar(instrucao);
}

