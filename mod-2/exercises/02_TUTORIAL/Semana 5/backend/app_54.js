const http = require('http');
const fs   = require("fs")
const hostname = '127.0.0.1';
const port = 3051;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'dbUser.db'; 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('../frontend/index.html', null, function (error, data) {
      if (error) {
          res.writeHead(404);
          res.write('Whoops! File not found!');
      } else {
          res.write(data);
      }
      res.end();
  });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use(express.static("../frontend/"));
app.use(express.json());

app.get('/user1', (req, res) => {
res.statusCode = 200;
//res.setHeader('Content-Type', 'text/html');
res.setHeader('Access-Control-Allow-Origin', '*');
var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM tbUser WHERE userId = 1';
db.get(sql, [], (err, row) => {
    if (err) {
    throw err;
    }
    //res.write("<h1> Teste do banco de dados</h1>") 
    //res.write("<h4> Informacoes do usuario cujo id = 1: </h2>") 
    //res.write("title = " + row.title); 
    //res.write("<br />completed = " + row.completed); 
    res.json(row);
});
});