var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {
    var idUsuario = req.body.idUsuario;
    var idQuiz = req.body.idQuiz;
    var pontuacao = req.body.pontuacao;

    if (idUsuario == undefined || idQuiz == undefined || pontuacao == undefined) {
        res.status(400).send("Faltam dados para salvar o resultado.");
    } else {
        quizModel.salvarResultado(idUsuario, idQuiz, pontuacao)
            .then(function (resultado) {
                res.status(200).json({
                    mensagem: "Resultado salvo com sucesso!",
                    dados: resultado
                });
            })
            .catch(function (erro) {
                console.log("Erro ao salvar resultado:", erro);
                res.status(500).json(erro);
            });
    }
}

module.exports = {
    salvarResultado
};

function obterMedias(req, res) {
    quizModel.obterMedias()
        .then((resultado) => res.json(resultado))
        .catch((erro) => {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao buscar médias" });
        });
}

function obterTopPersonalidade(req, res) {
    quizModel.obterTopPersonalidade()
        .then((resultado) => res.json(resultado))
        .catch((erro) => {
            res.status(500).json({ erro: "Erro ao buscar tops" });
        });
}

