const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  const num = _.random(0, 20);
  console.log(num);
  // response obj
  res.setHeader('Content-type', 'text/html');
  //send html
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});
server.listen(3000, 'localhost', () => {
  console.log('request made on port 3000');
});
