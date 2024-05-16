module.exports = {
    main: function (req, res, fs) {
        let fs = require('fs');

        fs.unlink('./input.txt', (err) => {
            if (err) throw err;
            console.log('File removed');
            res.send("Done");
        })
    }
}