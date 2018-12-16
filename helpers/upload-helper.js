module.exports = {

    isEmpty: function(obj){
        for(let key in obj){
            if(obj.hasOwnProperty()){
                return false;
            }
            
        }
        return true;
    }


};