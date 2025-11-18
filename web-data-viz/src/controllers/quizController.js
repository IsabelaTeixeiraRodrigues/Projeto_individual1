var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {
    var idUsuario = req.body.idUsuario;
    var idQuiz = req.body.idQuiz;
    var pontuacao = req.body.pontuacao;

    if (idUsuario == undefined || idQuiz == undefined || pontuacao == undefined) {
        res.status(400).send("Algum dado está undefined!");
    } else {
        quizModel.salvarResultado(idUsuario, idQuiz, pontuacao)
            .then(function (resposta) {
                res.status(200).json(resposta);
                if (!idUsuario) {
                res.status(400).json({ erro: "Usuário não está logado." });
                return;
}
            })
            .catch(function (erro) {
                console.log("Houve um erro ao salvar resultado: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    salvarResultado
};
