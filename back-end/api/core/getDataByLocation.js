module.exports = (app) => {
  var apiRoutes = app.Router();
  var fs = require('fs');
  var path = require('path');
  let files = {
    locationInfo: path.join(__dirname, 'data', 'locationInfo.json')
  }

  apiRoutes.post('/searchLocation', (req, res) => { })

  apiRoutes.get('/searchLocation', (req, res) => {
    let toExecute = function (err, data) {
      if (err) console.log(err.path);

      let a = null;
      if (!req.query.searchText) {
        a = JSON.parse(data).locations;
      } else {
        a = JSON.parse(data).locations.filter(
          x => x.title.toLowerCase().indexOf(req.query.searchText.toLowerCase()) !== -1);
      }

      res.end(JSON.stringify({ locations: a }));
    };

    fs.readFile(files.locationInfo, 'utf8', toExecute);
  })

  return apiRoutes;
}