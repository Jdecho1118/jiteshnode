module.exports = {

    main: function (req, res, fs) {
        // let fs = require('fs');

        let req_body = JSON.stringify(req.body);

        // fs.writeFile('input.txt',req_body, (err) => {
        //     if (err) throw err;
        //     console.log('The file has been saved!');
        //   }
        // )
        fs.writeFileSync('input2.txt',req_body);
        res.send("saved")
    }
}