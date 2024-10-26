const {checkSchema,validationResult } = require('express-validator');

class ValidatorRule{
    async addNewCategoryRule(req) {
        await checkSchema({
            name: {
                custom: {
                    options: (req) => {
                        if (req.length < 1) {
                            return Promise.reject("Tên quá ngắn");
                        }
                        if (req.length > 20) {
                            return Promise.reject("Tên quá dài");
                        }
                        return Promise.resolve(); 
                    }
                },
            },
            status:{
                isIn : {
                    options: [['active','inactive']],
                    errorMessage: "Vui lòng chọn status"
                }
             
            },
            description:{
                notEmpty:{
                    errorMessage: "Vui lòng thêm mô tả"
                }
            },
            ordering: {
                custom: {
                    options: (value) => {
                        if (value < 1) {
                            return Promise.reject("Ordering phải lớn hơn 1");
                        }
                        return true;
                    }
                }
            }
            
            
        }).run(req);
        return validationResult(req);
    }



}

module.exports = new ValidatorRule()