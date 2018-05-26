
module.exports = {

    getListFileByFolder:function(){
        const testFolder = './jsonsData/';
        const fs = require('fs');
        var array = [];
        
        fs.readdirSync(testFolder).forEach(file => {
            console.log(file);
            array.push(file);
        })
        
        return array;
    },
    
    getFileByName : function(key){
        const testFolder = './jsonsData/';
        const fs = require('fs');
        
        fs.readdirSync(testFolder).forEach(file => {
            if (key===file.getFileByName) {

            }
            console.log(file);
            array.push(file);
        })
        
        return array;
    },

    getFileByUser : function(uKey, pKey){
        // const testFolder = '../../jsonsData/user.json';
        var uFile = require('../../jsonsData/user.json');
        const fs = require('fs');     

        var Obj = JSON.stringify(uFile);
        var jsonObj = JSON.parse(Obj);

        console.log(jsonObj);
        console.log(jsonObj.data);

        var flag = false;
        var p = null;

        for(i in jsonObj.data){
            if(uKey == jsonObj.data[i].username){
                if(pKey == jsonObj.data[i].password){
                    console.log("Find username and password.");
                    console.log("Connecting...");

                    flag = true;
                    p=jsonObj.data[i].id;
                    break;
                } else {
                    console.log("Couldn't find corresponding.");
                }
            }
        }

        return '{"isOk":'+flag+',"idUser":"'+p+'"}';
    },
}  