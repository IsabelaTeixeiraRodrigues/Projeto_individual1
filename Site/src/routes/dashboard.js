var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.get("/medias", dashboardController.medias);
router.get("/personagens", dashboardController.personagens);
router.get("/puffles", dashboardController.puffles);

module.exports = router;

