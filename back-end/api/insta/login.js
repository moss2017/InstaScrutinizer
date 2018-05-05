
module.exports = (app) => {
  var apiRoutes = app.Router()
  var config = require('../../../configs')
  console.log('InstaScrutinizer api login... [ok]' )

  apiRoutes.get('/login',(req,res) =>{
    

    res.end('')
  })

  return apiRoutes;
}