var express = require("express");
var router = express.Router();

var comunidadeController = require("../controllers/comunidadeController");

router.get("/listar", function (req, res) {
    comunidadeController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    comunidadeController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    comunidadeController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    comunidadeController.publicar(req, res);
});

router.put("/editar/:idcomunidade", function (req, res) {
    comunidadeController.editar(req, res);
});

router.delete("/deletar/:idcomunidade", function (req, res) {
    comunidadeController.deletar(req, res);
});

module.exports = router;