
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
                                }

}  