var database = require("../database/config");

function salvarResultado(idUsuario, idQuiz, pontuacao) {
    console.log("ACESSEI O QUIZ MODEL > salvarResultado()");

    var instrucao = `
        INSERT INTO resultado_quiz (idUsuario, idQuiz, pontuacao)
        VALUES (${idUsuario}, ${idQuiz}, '${pontuacao}');
    `;

    console.log("Executando instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarResultado
};
