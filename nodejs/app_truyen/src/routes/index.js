var express = require('express');
var router = express.Router();

// router.get('/admin', (req, res) => {
//     res.render('page/admin/admin')
// })
router.use('/admin', require("./admin"))
router.use('/api/v1/', require("./api"))  

module.exports = router;
