const MainService = require('../../services/category_service.js')
const ValidatorRule = require('../validator_rule/validator_rule.js')

let prefix = 'admin/category'

class MangaController{

    getAll = async (req,res,next) =>{
        
        return res.render(`page/${prefix}/list`)
        // const {status,keyword,categoryId} = req.query
        // const page = req.query.page || 0
        // const itemPerPages = 3
        // let params = {} 
        // let buttonParams = {}
        // let filter = "filter"

      
        // if(status == "active" || status == "inactive"){
        //     params.status = status
        // }
        // if(keyword){
        //     params.name = {$regex:keyword}
        // }
        // if(categoryId){
        //   params.categoryId = categoryId
        //   buttonParams.categoryId = categoryId
        //   let category = await CategoryService.findById(categoryId)
        //   filter = category.name
        // }


        // let listStatusButton = [
        //     {
        //         link:`/admin/${prefix}`,
        //         name:'All',
        //         count: await MainService.countItems(buttonParams),
        //         active: status != "active" && status != "inactive" ? "primary" : "default" 
        //     },
        //     {
        //         link:`/admin/${prefix}?status=active`,
        //         name:'Active',
        //         count:await MainService.countItems({...buttonParams, status:"active"}),
        //         active: status == "active"? "primary" : "default"
        //     },
        //     {
        //         link:`/admin/${prefix}?status=inactive`,
        //         name:'Inactive',
        //         count:await MainService.countItems({...buttonParams,status:'inactive'}),
        //         active:status == "inactive"? "primary":"default"
        //     }
        // ]

    

        // let listCategory = await CategoryService.getAll()
        // let items = await MainService.getAll(itemPerPages,page,params)
        // let totalItem = await MainService.countItems()
        // let totalPage = Math.round(totalItem/3)
     
  

        // res.render(`page/${prefix}/list`, {page,status,items,listStatusButton,status,listCategory,filter,keyword,totalItem,totalPage})
    }

    form = async (req,res,next) => {
        const {id} = req.params
        
        res.render(`page/${prefix}/form`)
        return;
    }

    addNewAndEditCategory = async (req,res,next) => {
        const { id } = req.body;
        const result = await ValidatorRule.addNewCategoryRule(req)
        if(!result.isEmpty()){
            req.flash('errors', result.errors);
            if(id){
                return res.redirect(`/admin/${prefix}/form/`+id);
            }
                return res.redirect(`/admin/${prefix}/form/`);
        }
        let params = {}
        params = req.body 
        
        if(id){
            await MainService.updateItem(id,req.body)
            return res.redirect(`/admin/${prefix}`)
        }else{
            let newItem = await MainService.addNewItem(req.body)
            await CategoryService.updateListItem(newItem.categoryId,newItem._id)
            return res.redirect(`/admin/${prefix}`)
            
        }
    }

    deleteItemById = async (req,res,next) =>{
        const {id} = req.params
        await MainService.deleteById(id)
        res.redirect(`/admin/${prefix}`)
    }

    changeStatus = async(req,res,next) =>{
        const {id,status} = req.params
        console.log(id,status)
        await MainService.changeStatus(id,status)
        res.send({success:"success"})
    }

    changeOrdering = async (req,res,next) =>{
        const {id,ordering} = req.params
        await MainService.changeOrdering(id,ordering)
        res.send({success:"success"})
    }


}

module.exports = new MangaController();