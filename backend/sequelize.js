const Sequelize = require('sequelize');
const AccountModel = require('./src/models/account');
const CursoModel = require('./src/models/curso');
const DisciplinaModel = require('./src/models/disciplina');
const PagamentoModel = require('./src/models/pagamento');
const ProfissionalModel = require('./src/models/profissional');
const TurmaModel = require('./src/models/turma');

const sequelize = new Sequelize('sgpapp', 'dev', 'TH@y!!3r', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const account = AccountModel(sequelize, Sequelize)
const curso = CursoModel(sequelize, Sequelize)
const disciplina = DisciplinaModel(sequelize, Sequelize)
const pagamento = PagamentoModel(sequelize, Sequelize) 
const profissional = ProfissionalModel(sequelize, Sequelize)
const turma = TurmaModel(sequelize, Sequelize)

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  account,
  curso,
  disciplina,
  pagamento,
  profissional,
  turma
}
