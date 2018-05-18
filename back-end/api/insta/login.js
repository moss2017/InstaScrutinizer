
module.exports = (app) => {
  var apiRoutes = app.Router();
  var config = require('../../../configs');
 

  console.log('InstaScrutinizer api login... [ok]' )

  apiRoutes.post('/login',(req,res) =>{
    var date = new Date();
    var current_hour = date.getHours();
    console.log('['+date+']'+' [POST] Server Login API!');
   
    var Obj = JSON.stringify(req.body);
    var jsonObj = JSON.parse(Obj);
    var user = jsonObj.jsonObject.name; //param('user');
    var userpass = jsonObj.jsonObject.pwd; //param('password');    
    console.log(user+' = '+userpass);

    /*VERIFY IF USER AND PASS EXIST*/
    /*GET FILE USER.JSON */
    
   res.end('{"isOk":"false","idUser":"1"}');
   
  })

  apiRoutes.get('/login',(req,res) =>{
    var date = new Date();
    var current_hour = date.getHours();
    console.log('['+date+']'+' [GET] Server Login API!')

   // res.end(req.body);
    res.end('['+date+']'+' [GET] Server Login API!')
  })

  return apiRoutes;
}