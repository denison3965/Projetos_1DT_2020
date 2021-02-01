//importtando modulos e utilitarios
    const Sequelize = require('sequelize')

//Instansiando um novo objeto do sequelize (Afim de se conectar ao meu banco de dados),,
//Passando pelo construtor as informacoes nescessarias para se conectar ao banco, e o nome
//do banco desejado
    const sequelize = new Sequelize('cadastrados', "deni", "Denison_123123#",{
        host:"localhost",
        dialect: 'mysql'
    })

//Verificando se a conexão com o banco foi bem, sucedida ou nao
    sequelize.authenticate().then(() => {
        console.log("Conectado com sucesso")
    }).catch((erro) => {
        console.log("Falha ao se conectar: " + erro)
    })

//Exportando a constate que possui o modulo sequelize
//e tambem o objeto que se conectou com o banco de dados    
    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }