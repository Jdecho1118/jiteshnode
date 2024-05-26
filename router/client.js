module.exports = function(app){
   app.post('/api/client/v1/create_client/', function(req, res){
   });
   
   app.get('/api/client/v1/read_client/', function(req, res){
   
       let f1 = require(__dirname + './../src/client/read_client');
       f1.main(req, res)
   }); 
   
   app.post('/api/client/v1/create_client/', function(req, res){
   });
   
   app.post('/api/client/v1/create_client/', function(req, res){
   });
   
   app.get('/api/client/v1/create_client_in_mongo/',function(req, res){
       let create = require(__dirname + './../src/client/create_client_in_mongo');
       create.main(req,res)
   });
   }