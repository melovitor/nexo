const express = require('express') 
const app = express()
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = '4ad79cc031554b193c53e9f52a1100354095e9a31fb34566ee3ec2dd3d0f9d95'
 
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nexo'
})

db.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao estabelecer conexão com o banco de dados:', err);
    } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
});

app.use(express.json())
app.use(cors())

app.post("/transaction", (req, res) => {
    return res.send('Ola')
})


app.post("/home", (req, res) => {
    const token = req.body.token;
    try {
      const decode = jwt.verify(token, secretKey);
      const email = decode.email;  
      db.query("SELECT * FROM transaction WHERE user = ?", [email], (err, result) => {
        if (err) {
          console.log(err);
          return res.send(err);
        } else {
          return res.send(result);
        }
      });
    } catch (err) {
      return res.send(false);
    }
  });

app.post("/signup", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;    
    var token = jwt.sign({email: email}, secretKey, {expiresIn: 7200})

    db.query("SELECT * FROM users WHERE email = ?", [email], 
    (err, result) => {
        if (err) {
            res.send(err);
        } else {
            if (result.length === 0) {
                bcrypt.hash(password, 10, (err, hash) => {
                    db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
                    [name, email, hash], 
                    (err, result) => {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send({ msg: 'Usuário cadastrado com sucesso!', token });
                        }
                    });
                })
            } else {
                res.send({ msg: 'Usuário já cadastrado!' });
            }
        }
    });
});


app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    var token = jwt.sign({email: email}, secretKey, {expiresIn: 7200})

    db.query("SELECT * FROM users WHERE email = ?", [email], 
    (err, result) => {
        if (err) {
            res.send(err);
        } else {
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (err, result) => {
                    if(result){
                        return res.json({
                            msg: 'Usuário logado com sucesso!',
                            token
                        })
                    } else {
                        res.send({ msg: 'E-mail ou senha invalida!' })
                    }
                })
            } else {
                res.send({ msg: 'E-mail ou senha invalida!' });
            }
        }
    });
});


app.listen(5174, () => {
    console.log('server on')
})