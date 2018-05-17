module.exports = (app) => {
    var apiRoutes = app.Router();
    var fs = require('fs');
   
  
    console.log('InstaScrutinizer api searchUser... [ok]' )
  
    apiRoutes.post('/searchUser',(req,res) =>{  
        var date = new Date();

       var obj = JSON.parse(fs.readFileSync('./jsonsData/tag&moss.json', 'utf8'));
    //    res.on('data',(obj)=>{
    //        data += obj;
    //    });
       res.json(obj);
        console.log(obj);
        //res.end(obj);
        res.end('['+date+']'+'[POST] InstaScrutinizer api searchUser... [ok]')
    })

    apiRoutes.get('/searchUser',(req,res) =>{
        var date = new Date();


        res.end('['+date+']'+' [GET] InstaScrutinizer api searchUser... [ok]')
    })

    return apiRoutes;
  }