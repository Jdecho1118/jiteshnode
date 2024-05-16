module.exports = function(app,fs)
{

app.post('/api/client/v1/create_client/',function(req, res){

    let f1 = require(__dirname + './../src/client/create_client');
    f1.main(req,res,fs)
});

app.get('/api/client/v1/:e_id/',function(req, res){
    let f1 = require(__dirname + './../src/client/get_client');
    f1.main(req,res,fs)
});

app.get('/api/client/v1/get_client_list/',function(req, res){
   let f1 = require(__dirname + './../src/client/get_client_list');
   f1.main(req,res,fs)
});

app.get('/api/client/v1/write_fileclient/',function(req, res){
    let f1 = require(__dirname + './../src/client/write_fileclient');
    f1.main(req,res,fs)
 });

 app.get('/api/client/v1/sync_write_fileclient/',function(req, res){
    let f1 = require(__dirname + './../src/client/sync_write_fileclient');
    f1.main(req,res,fs)
 });

 app.get('/api/client/v1/read_fileclient/',function(req, res){
    let f1 = require(__dirname + './../src/client/read_fileclient');
    f1.main(req,res,fs)
 });

 app.get('/api/client/v1/delete_fileclient/',function(req, res){
    let f1 = require(__dirname + './../src/client/delete_fileclient');
    f1.main(req,res,fs)
 });

 app.get('/api/client/v1/all_functions/',function(req, res){
    let f1 = require(__dirname + './../src/client/all_functions');
    f1.main(req,res,fs)
 });


// app.delete('/api/client/v1/delete_client/',function(req, res){
//    let create = require(__dirname + './../src/client/remove_fileclient');
//    create.main(req,res,fs);
// });
// }