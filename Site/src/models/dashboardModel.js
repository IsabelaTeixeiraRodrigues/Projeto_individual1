var database = require("../database/config");

function buscarMediasQuizzes() {
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

function buscarResultadosPersonagem() {
    var instrucao = `
        SELECT pontuacao AS personagem,
               COUNT(*) AS quantidade
        FROM resultado_quiz
        WHERE idQuiz IN (19)
        GROUP BY pontuacao
        ORDER BY quantidade DESC;
    `;
    return database.executar(instrucao);
}

function buscarResultadosPuffle() {
    var instrucao = `
        SELECT pontuacao AS puffle,
               COUNT(*) AS quantidade
        FROM resultado_quiz
        WHERE idQuiz IN (20)
        GROUP BY pontuacao
        ORDER BY quantidade DESC;
    `;
    return database.executar(instrucao);
}

module.exports = {
    buscarMediasQuizzes,
    buscarResultadosPersonagem,
    buscarResultadosPuffle
};

