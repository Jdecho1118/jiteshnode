module.exports = {
    main : function (req, res) {
        let fs = require('fs');

        let req_body = JSON.stringify(req.body);
        console.log("print", req_body);

        fs.writeFileSync('sync_input.txt', req_body)
            res.send("saved")
    }
}