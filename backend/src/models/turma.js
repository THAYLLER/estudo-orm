module.exports = (sequelize, type) => {
    return sequelize.define('turma', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        codigo: type.STRING,
        curso: {
          type: type.INTEGER,
          references: {
            model: 'curso',
            key: 'id'
          }
        }
    })
}