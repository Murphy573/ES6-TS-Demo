/**
 * Created by pengfei.li on 2017/6/16.
 */
let express = require("express");
let nodeStudy = express();
nodeStudy.get("/", function(req, res){
    res.send("hello node")
});

/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/

let server = nodeStudy.listen(9999, function(){
    let host = server.address().address;
    let port = server.address().port;

    console.log("愉快地学习node吧！！");
})
