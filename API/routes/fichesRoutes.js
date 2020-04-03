const express = require('express');
const FichesController = require('../controller/fichesController');

const fichesController = new FichesController();
const router = express.Router();

router
    .route('/')
    .get(fichesController.getAllFiches)
    .post(fichesController.createFiche);

router
    .route('/:id')
    .get(fichesController.getFiche)
    .patch(fichesController.updateFiche)
    .delete(fichesController.deleteFiche);

module.exports = router;
