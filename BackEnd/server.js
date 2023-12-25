import http from 'http';
import fs from 'fs';
import { log } from 'console';
import url from 'url';

http.createServer(function(req, res){
const q = url.parse(req.url, true);
console.log(q.pathname);

let filename = '';
let contentType = '';
switch(q.pathname){
    case "/":
        filename = 'index.html';
        contentType = 'text/html';
        res.statusCode = 200;
        break;
    case "/index2":
        filename = 'index2.html';
        contentType = 'text/html';
        res.statusCode = 200;
        break;
    case "/style.css":
        filename = 'style.css';
        contentType = 'text/css';
        res.statusCode = 200;
        break;
}
    fs.readFile(filename, function(err, data){
        if(err){
            console.log('Errorrrr');
        }
        res.writeHead(200, {'content-Type': contentType});
        res.write(data);
        res.end();
    });

}).listen(3000);