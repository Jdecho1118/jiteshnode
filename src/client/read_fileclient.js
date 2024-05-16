module.exports = {

    main: function (req, res, fs) {
        let fs = require('fs');

        // let req_body = JSON.stringify(req.body);

        fs.readFile('./input.txt', (err,data) => {
            if (err) throw err;
            console.log(data.toString());
            res.send(data)
        }
        )
    }
}