module.exports = {
    main : function(req, res){
        console.log(req.params);
        let x = req.params.e_id;
        res.send(x);
    }
}