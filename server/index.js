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
    const token = req.body.token;
    const isDelete = req.body.isDelete;
    const isCreate = req.body.isCreate;
    const isEdit = req.body.isEdit;
    const decode = jwt.verify(token, secretKey);
    const email = decode.email;  
    const data = req.body.data

    if (isEdit) {
        const sql = 'UPDATE transaction SET title = ?, amount = ?, category = ?, in_status = ?, date = ? WHERE idtransaction = ?';
        db.query(sql, [data.title, data.amount, data.category, data.in ? 1 : 0, data.date, data.idtransaction], (err, result) => {
          if (err) {
            console.error('Erro ao atualizar item:', err);
          } else {
            console.log('Item atualizado com sucesso');
          }
        });
    }

    if (isDelete) {
        const sql = 'DELETE FROM transaction WHERE idtransaction = ?';
        db.query(sql, [data], (err, result) => {
            if (err) {
            console.error('Erro ao excluir item:', err);
            } else {
            console.log('Item excluído com sucesso');
            }
        });
    }

    if (isCreate) {
        var in_status = data.in ? 1 : 0;
        const sql = 'INSERT INTO transaction (title, amount, category, date, user, username, in_status) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [data.title, data.amount, data.category, data.date, email, email, in_status];
      
        db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Erro ao inserir novo item:', err);
            return res.send(err);
        } else {
            console.log('Novo item inserido com sucesso');
        }
        });
    }

    try {
        const decode = jwt.verify(token, secretKey);
        const email = decode.email;  
        db.query("SELECT * FROM transaction WHERE user = ?", [email], (err, result) => {
          if (err) {
            console.log(err);
            return res.send(err);
          } else {
            console.log(result)
            return res.send(result);
          }
        });
    } catch (err) {
        return res.send(false);
    }
    
})


app.post("/home", (req, res) => {
    const token = req.body.token;
    try {
        const decode = jwt.verify(token, secretKey);
        const email = decode.email;  
        db.query("SELECT * FROM users WHERE email = ?", [email], 
        (err, result) => {
            res.send(result[0].name)
        })
        } catch (err) {
        return res.send(false);
        }
  });

app.post("/signup", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;    
    var token = jwt.sign({email,name}, secretKey, {expiresIn: 7200})

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
    var token = jwt.sign({email}, secretKey, {expiresIn: 7200})

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