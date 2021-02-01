//importando as 
const db = require('./db')

const Professores = db.sequelize.define('professores', {
    Nome: {
        type: db.Sequelize.STRING
    },
    Nascimento: {
        type: db.Sequelize.STRING
    },
    Salario: {
        type: db.Sequelize.STRING
    },
    CPF: {
        type: db.Sequelize.STRING
    },
    Sexo: {
        type: db.Sequelize.STRING
    },
    RG: {
        type: db.Sequelize.STRING
    },
    Periodo: {
        type: db.Sequelize.STRING
    },
    Telefone: {
        type: db.Sequelize.STRING
    },
    Email: {
        type: db.Sequelize.STRING
    },
    Sanguineo: {
        type: db.Sequelize.STRING
    },
    Materia: {
        type: db.Sequelize.STRING
    },
    
})

Professores.sync({force: true})

module.exports = Professores