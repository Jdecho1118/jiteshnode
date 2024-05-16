module.exports = {
    main: function(req, res) {
        console.log(req.params);
        let x = req.query;
        res.send(x);
    }
}