const MainModel = require('../models/category_model')
class CategoryService{

    getAll = async (itemPerPages,page,params) =>{
        page = page -1
        let listCategory = await MainModel.find({})
        .skip(page*itemPerPages).limit(itemPerPages).sort('-createdAt')
        return listCategory
    }

    getCategory = async(id) =>{
        let category = await MainModel.findById(id)
        console.log(category);
        return category;
    }

    addNewItem = async (name,status,ordering,description) =>{
        await MainModel.create({
            category_name:name,
            status,
            description,
            ordering,
        })
        return;
    }

    countItems = async({buttonParams}) =>{
        const numberItem = await MainModel.countDocuments();
        return numberItem;
    }

}

module.exports = new CategoryService()