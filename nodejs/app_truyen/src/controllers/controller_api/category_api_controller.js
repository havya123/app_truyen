const MainService = require('../../services/category_service')
const {PageNotFound,Conflict} = require("../../apps/core/error_response")
const {OK} = require("../../apps/core/success_response")

class CategoryApiController{
    getAll = async (req,res,next) =>{
            const {keyword} = req.query
            const page = req.query.page || 0
            const itemPerPages = 3
            let params = {}

            if(keyword){
                params.name = {$regex:keyword}
            }
    
            let items = await MainService.getAll(itemPerPages,page,params)
            

            new OK({
                metaData: {
                    page,
                    data : items,
                }
            }).send(res)
         
        }
    

    getOne = async(req,res,next) =>{
        const {id} = req.params
        let category = await MainService.findById(id)
        if(!category) throw new Conflict('Id Không Tồn Tại')
        
        res.status(200).send({
            message: "Lấy thành công",
            statusCode: 200,
            metaData:category
        })
    }

    
}

module.exports = new CategoryApiController()