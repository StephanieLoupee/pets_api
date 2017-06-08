(function() {
  //brings in express library to use,
  //just like bringing in jQuery when in a browser
  let express = require("express");

  //app == whatever express returns = all functionality that express has
  let app = express();

  // Create our first route
  app.get('/', function(req, res) {
    res.send("<div>Hello world</div>");
  });

  app.get('/api/pets', function(req, res) {
    //this is a hard-coded response to simulate a db call
    res.send({
      "data": {
        "pets": [
          {
            "id": 1,
            "name": "Fluffy",
            "age": 5,
            "uri": "/api/pets/1"
          }, {
            "id": 2,
            "name": "Bob",
            "age": 6,
            "uri": "/api/pets/2"
          }
        ]
      }
    });
  });

  app.get('/api/pets/1', function(req, res) {
    //this is hard-coded response to simulate a db call
    res.send({
            "id": 1,
            "name": "Fluffy",
            "age": 5,
            "type": "dog"
          });
  })

  app.get('/api/pets/2', function(req, res) {
    //this is a hard-coded response to simulate a db call
    res.send({
      "id": 2,
      "name": "Bob",
      "age": 6,
      "type": "cat"
      });
  })

  app.listen(4786, function () {
  console.log('Example app listening on port 4786!')
})

})();
