const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';
const portback = 3009;
const sqlite3 = require('sqlite3').verbose();
const server = express();
const DBPATH = 'dbcurriculo1.db';
server.use(express.static("../Index"));
server.use(express.json());

server.listen(portback, hostname, () => {
	console.log(`BD server running at http://${hostname}:${portback}/`);
  });


//Isso faz um POST

server.post('/fazerCadastro', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	sql = "INSERT INTO tabela_dados (email, tel, nome) VALUES ('"+ req.body.email + "','"+ req.body.tel +"','"+ req.body.nome +"')"; //define as colunas o que será requerido
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close();
	res.end();
});

// Isso faz um GET
server.get('/veCadastro', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = 'SELECT * FROM tabela_dados'; //seleciona tudo da tabela
	var db = new sqlite3.Database(DBPATH); 
	db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); 
});

// isso faz um delete
server.delete('/excluiCadastro', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    sql = "DELETE FROM tabela_dados WHERE id =  '"+ req.body.id+"'"; //deleta a partir do id
    var db = new sqlite3.Database(DBPATH); 
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); 


// isso faz um edit
server.patch('/editaCadastro', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    sql = "UPDATE tabela_dados SET email= '" + req.body.email+"', tel= '" + req.body.tel+"'   WHERE id ='" + req.body.id + "'"; //edita as informações a partir do id
	var db = new sqlite3.Database(DBPATH); 
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); 
});
})

