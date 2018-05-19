module.exports = (app) => {
    var apiRoutes = app.Router();
    var fs = require('fs');
    var tools = require('./base');
   
  
    console.log('InstaScrutinizer api searchUser... [ok]' )
  
    apiRoutes.post('/searchUser',(req,res) =>{  
        var date = new Date();
        
        // var Obj = JSON.stringify(req.body);
        // var jsonObj = JSON.parse(Obj);
        // console.log(jsonObj.userKey);
        // var userDataJson = tools.getFileByName(jsonObj.userKey);

         var array = tools.getListFileByFolder();
        // array.forEach(function(item, index, array) {
        //     console.log(item, index);
        // });
       


        // var obj = JSON.parse(fs.readFileSync('./jsonsData/tag&moss.json', 'utf8'));
        // res.json(obj);
        // console.log(obj);
        //res.end('['+date+']'+'[POST] InstaScrutinizer api searchUser... [ok]')
        res.end('{"data":"cenas"}');
    })

    apiRoutes.get('/searchUser',(req,res) =>{
        var date = new Date();


        res.end('['+date+']'+' [GET] InstaScrutinizer api searchUser... [ok]')
    })

    return apiRoutes;
  }