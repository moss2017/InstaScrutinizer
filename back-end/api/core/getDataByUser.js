module.exports = (app) => {
    var apiRoutes = app.Router();

   
  
    console.log('InstaScrutinizer api searchUser... [ok]' )
  
    apiRoutes.post('/searchUser',(req,res) =>{ 

    })

    apiRoutes.get('/searchUser',(req,res) =>{
        
    })

    return apiRoutes;
  }