class AdminController{

    adminPage = async(req,res,next) =>{
        res.render('page/admin/admin')
    }

}

module.exports = new AdminController();