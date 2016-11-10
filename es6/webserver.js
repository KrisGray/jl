const http = require('http');

const server = http.createServer(function(req, res){
  console.log(`${req.method} ${req.url}`);
  res.end('hello, world!')
});

const port = 9000;
server.listen(port, function(){
  console.log(`server started on port ${port}`);
});