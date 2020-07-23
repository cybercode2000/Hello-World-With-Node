const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
      res.write("Hello World, welcome to WeJapa Internships");
      res.end()
  }
});

PORT = 3000;

server.listen(PORT);

console.log(`App Now Listen @ PORT ${PORT}`)