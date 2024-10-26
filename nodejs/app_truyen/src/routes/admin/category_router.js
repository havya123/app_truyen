var express = require('express');
var router = express.Router();

const MainController = require('../../controllers/controller_admin/category_controlller')

router.get('/list',MainController.getAll)
router.get('/form/(:id)?',MainController.form)
router.get('/form',MainController.form)
router.post('/form',MainController.addNewAndEditCategory)

module.exports = router;