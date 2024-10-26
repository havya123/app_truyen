var express = require('express');
var router = express.Router();

const MangaController = require('../../controllers/controller_admin/manga_controller')

router.get('/',(req,res,next) => res.render({}))
router.get('/category',MangaController.getAll)
router.get('/category/form',MangaController.form)


module.exports = router;