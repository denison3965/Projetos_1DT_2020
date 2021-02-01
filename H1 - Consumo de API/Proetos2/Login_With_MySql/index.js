//Importando modulos e utilitarios

    var express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
    const Sequelize = require('sequelize')
    const Pessoa = require('./models/Pessoa')

//Fazendo com que o meu Back-End veja o Front
    app.use(express.static(__dirname + "/front_end"))

//Config

    //Body Parser (responsavel por pegar os dados enviados pelo form)
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //Rotas


        app.get('/formulario_de_cadastro', (req, res) => {
            res.sendfile(__dirname + "/views/index.html")
        })

        app.get('/login', (req, res) => {
            res.sendfile(__dirname + "/views/login.html",__dirname + "/views/logo.png")
        })


        //Rota para verificador de acesso do login
        app.post('/verificador', (req, res) => {
            //consultar no banco de dados o email
            Pessoa.findOne({ where: { Email: req.body.email}}).then((usuario) => {
                //se o email existir 
                if(usuario){
                    //consultar no banco de dados a senha
                    Pessoa.findOne({ where: { Senha: req.body.senha}}).then((senha) => {
                        //se a senha bater com que o usuario escreveu:
                        if(senha){
                            res.sendfile(__dirname + "/views/entrou.html")
                        }else{
                            res.sendfile(__dirname + "/views/senha_errada.html")
                        }
                        
                    }).catch((err) => res.send("senha invalida" + err))
                }else{
                    res.sendfile(__dirname + "/views/email_errado.html")
                }
                
            }).catch((err) => res.send("e-mail invalido" + err))
        })

        app.post('/add', (req, res) => {
            Pessoa.create({
                //usando o body (comando do bodyParse, para trazer os dados do formulario que ativou o action)    
                Nome: req.body.nome,
                Nascimento: req.body.nascimento,
                CPF: req.body.cpf,
                RG: req.body.rg,
                Senha: req.body.senha,
                DDD: req.body.ddd,
                Telefone: req.body.telefone,
                Email: req.body.email,
                Sexo: req.body.sexo,
                Sanguíneo: req.body.sangue,
                Período: req.body.periodo,
                Matrícula: req.body.matricula,
                RA: req.body.ra,
                Turma: req.body.turma

            }).then(() => {
                res.sendfile(__dirname + "/views/cadastrado.html")
            }).catch((erro) =>  {
                res.send("Algo deu errado!! " + erro)
            })
            
            
        })


        app.post('/register', (req, res) => {
            res.send(req.body)
            console.log(req.body)
        })

        app.listen(8082, () => {
            console.log("Servidor rodando na url http://localhost:8082")
        })