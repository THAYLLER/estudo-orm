module.exports = (sequelize, type) => {
    const account = sequelize.define('account', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        login: type.STRING,
        senha: type.STRING
    })

    return account;
}