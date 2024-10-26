const MainService = require('../../services/category_service.js')
const ValidatorRule = require('../validator_rule/validator_rule.js')

let prefix = 'admin/category'

class CategoryController{

    getAll = async (req,res,next) =>{
        const {status,keyword,categoryId} = req.query
        const page = req.query.page
        const itemPerPages = 3
        let params = {} 
        let buttonParams = {}
        let filter = "filter"

      
        if(status == "active" || status == "inactive"){
            params.status = status
        }
        if(keyword){
            params.name = {$regex:keyword}
        }
        if(categoryId){
          params.categoryId = categoryId
          buttonParams.categoryId = categoryId
          let category = await CategoryService.findById(categoryId)
          filter = category.name
        }


        let listStatusButton = [
            {
                link:`/admin/${prefix}`,
                name:'All',
                count: await MainService.countItems(buttonParams),
                active: status != "active" && status != "inactive" ? "primary" : "default" 
            },
            {
                link:`/admin/${prefix}?status=active`,
                name:'Active',
                count:await MainService.countItems({...buttonParams, status:"active"}),
                active: status == "active"? "primary" : "default"
            },
            {
                link:`/admin/${prefix}?status=inactive`,
                name:'Inactive',
                count:await MainService.countItems({...buttonParams,status:'inactive'}),
                active:status == "inactive"? "primary":"default"
            }
        ]


        const listCategory = await MainService.getAll(itemPerPages,page,params)
        res.render(`page/${prefix}/list`,{page,status,listStatusButton,status,listCategory,filter,keyword})
    }

    addNewAndEditCategory = async (req,res,next) =>{
        const{name,status,ordering,description,id} = req.body;
        const result = await ValidatorRule.addNewCategoryRule(req);
        if(!result.isEmpty()){
            console.log(result.errors)
            req.flash('errors', result.errors);
            if(id){
                return res.redirect(`form/`+id);
            }
                return res.redirect(`form`);
        }
        console.log('ok2')
        await MainService.addNewItem(name,status,ordering,description);
        return res.redirect(`list`);
        

    }

    form = async (req,res,next) => {
        const {id} = req.params
        if(id){

            const category = await MainService.getCategory(id);
            return  res.render(`page/${prefix}/form`,{category})
        }
        return res.render(`page/${prefix}/form`,{category:null})
  
    }

}
module.exports = new CategoryController()