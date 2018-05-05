
module.exports = (app) => {
    var apiRoutes = app.Router()
    console.log("merda 1")

    apiRoutes
    .get('/merda',(req,res) =>{
        console.log("merda 2")
        res.end('merda')
    })

    return apiRoutes;
}