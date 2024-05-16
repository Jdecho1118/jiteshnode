module.exports = {

    main: function (req, res) {
        console.log(req.body);
        res.send(req.body);
    }
}