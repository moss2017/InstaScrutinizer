module.exports = (app) => {
    var apiRoutes = app.Router();

   
  
    console.log('InstaScrutinizer api searchTag... [ok]' )
  
    apiRoutes.post('/searchTag',(req,res) =>{ })

    apiRoutes.get('/searchTag',(req,res) =>{})

    return apiRoutes;
  }