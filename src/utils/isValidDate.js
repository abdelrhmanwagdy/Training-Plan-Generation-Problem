var validateDate = require("validate-date");


function isValidDate (dateString){
    try{
        if(validateDate(dateString, responseType="boolean", dateFormat="yyyy-mm-dd")){
            return true;
        }
        else{
            return false;
        }
    }
    catch(err){
        return false;
    }

}

module.exports = isValidDate