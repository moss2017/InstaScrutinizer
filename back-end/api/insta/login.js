
module.exports = (app) => {
  var apiRoutes = app.Router();
  var config = require('../../../configs');
  var tools = require('../core/base'); 

  console.log('InstaScrutinizer api login... [ok]' )

  apiRoutes.post('/login',(req,res) =>{
    var date = new Date();
    var current_hour = date.getHours();
    console.log('['+date+']'+' [POST] Server Login API!');
   
    var Obj = JSON.stringify(req.body);
    var jsonObj = JSON.parse(Obj);
    var user = jsonObj.jsonObject.name; //param('user');
    var userpass = jsonObj.jsonObject.pwd; //param('password');    
   // console.log(user+' = '+userpass);

    var userDataJsonUser = tools.getFileByUser(user, userpass);
   
    /*VERIFY IF USER AND PASS EXIST*/
   
    /*GET FILE USER.JSON */

    //console.log(userDataJsonUser);
   res.end(userDataJsonUser);
   
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