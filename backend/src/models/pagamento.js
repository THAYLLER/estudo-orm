module.exports = (sequelize, type) => {
    return sequelize.define('pagamento', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        data: type.DATE,
        valor: type.DOUBLE,
        periodo: type.STRING,
        carga_horaria_periodo: type.INTEGER,
        horas_em_sala: type.INTEGER,
        valor_total: type.DOUBLE,
        curso: {
          type: type.INTEGER,
          references: {
            model: 'curso',
            key: 'id'
          }
        },
        disciplina: {
          type: type.INTEGER,
          references: {
            model: 'disciplina',
            key: 'id'
          }
        },
        profissional: {
          type: type.INTEGER,
          references: {
            model: 'profissional',
            key: 'id'
          }
        }
    })
}