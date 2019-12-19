module.exports = (sequelize, type) => {
    return sequelize.define('disciplina', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        descricao: type.STRING,
        carga_horaria_disciplina: type.INTEGER
    })
}