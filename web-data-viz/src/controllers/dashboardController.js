var dashboardModel = require("../models/dashboardModel");

function medias(req, res) {
    dashboardModel.buscarMediasQuizzes()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.log("Erro:", erro);
            res.status(500).json(erro);
        });
}

function personagens(req, res) {
    dashboardModel.buscarResultadosPersonagem()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.log("Erro:", erro);
            res.status(500).json(erro);
        });
}

function puffles(req, res) {
    dashboardModel.buscarResultadosPuffle()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.log("Erro:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    medias,
    personagens,
    puffles
};
