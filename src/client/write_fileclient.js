module.exports = {
    main: function (req, res) {
        let fs= require('fs');

        let req_body = JSON.stringify(req.body);
        console.log("print", req_body);
        fs.writeFileSync('input.txt', req_body, (err) => {
            if(err) throw err;
            console.log('the file has been saved');
            res.send("saved")
        })
    }
}