const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url == "/") {
      res.write("Hello World, welcome to WeJapa Internships");
      res.end()
  }
  else {
      res.end('Error 404!!!!!! PAGE NOT FOUND')
    }
});

PORT = 3000;

server.listen(PORT, () => {
    console.log(`App Now Listen @ PORT ${PORT}`)
});
