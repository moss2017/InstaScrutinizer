module.exports = (app) => {
    var apiRoutes = app.Router();

   
  
    console.log('InstaScrutinizer api searchLocation... [ok]' )
  
    apiRoutes.post('/searchLocation',(req,res) =>{ })

    apiRoutes.get('/searchLocation',(req,res) =>{})

    return apiRoutes;
  }