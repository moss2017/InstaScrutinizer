
module.exports = (app) => {
  var apiRoutes = app.Router();
  var config = require('../../../configs');
 

  console.log('InstaScrutinizer api login... [ok]' )

  apiRoutes.post('/login',(req,res) =>{
    var date = new Date();
    var current_hour = date.getHours();
    console.log('['+date+']'+' [POST] Server Login API!');
  
    var user = req.body.user; //param('user');
    var userpass = req.body.password; //param('password');

    res.end(user+' = '+userpass);
    res.end('['+date+']'+' [POST] Server Login API!');
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