const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let path = url.parse(req.url,true);

    if(path.pathname == "/find")
    {
        let num = path.query.number;
        
        let ans = num*num;
        res.write("square = " + ans.toFixed(2));
        let m1 = "num = " + num + "/n";
        let m2 = "square = " + ans + "/n";
        let m3 = "date = " +new Date().toString() + "\n\n";
        let msg = m1+m2+m3;
        fs.appendFile("result.txt",msg,(err) => {if(err) console.log(err); })
            res.end();
    }
})

server.listen(9000, () => {console.log("Server Started");})