module.exports = (app) => {
    var apiRoutes = app.Router();
    var fs = require('fs');
    var path = require('path');
    var tools = require('./base');
    let files = {
        userInfo: path.join(__dirname, 'data', 'userInfo.json')
    }
   
  
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

    apiRoutes.get('/searchUser', (req, res) => {
        let toExecute = function (err, data) {
            if (err) console.log(err.path);

            let a = null;
            if (!req.query.searchText) {
                a = JSON.parse(data).users;
            } else {
                a = JSON.parse(data).users.filter(x => x.name.indexOf(req.query.searchText) !== -1);
            }

            res.end(JSON.stringify({users:a}));
        };

        fs.readFile(files.userInfo, 'utf8', toExecute);
    })

    return apiRoutes;
  }