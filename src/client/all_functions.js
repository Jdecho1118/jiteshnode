module.exports ={
    main: function (req, res) {
        let fs = require('fs');
        if(req.query.operation === "write"){
            if(req.query.nature == "async") {
                fs.writeFile('message3.txt', 'hellonode.js', (err) => {
                    if(err) throw err;
                    console.log('the file has been saved');
                    res.send("not saved")
                })
            }else if(req.query.nature == "sync"){
                let req_body = JSON.stringify(req.body);
                fs.writeFileSync('input1.txt', req_body);
                res.send("saved")
            }
        }else if (req.query.operation === "read") {
            fs.readFile('./input1.txt', (err, data) =>{
                if (err) throw err;
                console.log(data.toString());
                res.send(data)
            })
        }else if (req.query.operation === "delete") {
            fs.unlink('./input1.txt' , (err) => {
                if (err) throw err;
                console.log('the file has been remove!');
                res.send("Done");
            })
        }
    }
}