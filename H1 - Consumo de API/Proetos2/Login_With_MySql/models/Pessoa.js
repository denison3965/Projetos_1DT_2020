//importando as 
const db = require('./db')

const Pessoas = db.sequelize.define('cadastrados2', {
    Nome: {
        type: db.Sequelize.STRING
    },
    Nascimento:{
        type: db.Sequelize.STRING
    },
    CPF:{
        type: db.Sequelize.STRING
    },
    RG:{
        type: db.Sequelize.STRING
    },
    Senha:{
        type: db.Sequelize.STRING
    },
    DDD:{
        type: db.Sequelize.STRING
    },

    Telefone:{
        type: db.Sequelize.STRING
    },
    Email:{
        type: db.Sequelize.STRING
    },
    Sexo:{
        type: db.Sequelize.STRING
    },
    Sanguíneo:{
        type: db.Sequelize.STRING
    },
    Matrícula:{
        type: db.Sequelize.STRING
    },
    RA:{
        type: db.Sequelize.STRING
    },
    Turma:{
        type: db.Sequelize.STRING
    },
    Período:{
        type: db.Sequelize.STRING
    }

    
})

// Pessoas.sync({force: true})

module.exports = Pessoas