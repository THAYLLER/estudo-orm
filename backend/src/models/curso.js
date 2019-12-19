module.exports = (sequelize, type) => {
    return sequelize.define('curso', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        data_inicio: type.DATE,
        descricao: type.STRING,
        ultima_parcela_paga_coordenador: type.INTEGER
    })
}