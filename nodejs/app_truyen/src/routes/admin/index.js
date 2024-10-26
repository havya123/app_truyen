var express = require('express');
var router = express.Router();

const AdminController = require ('../../controllers/controller_admin/admin_controller')


router.get('/',AdminController.adminPage)
router.use('/manga',require('./manga_router'))
router.use('/category',require('./category_router'))

module.exports = router;