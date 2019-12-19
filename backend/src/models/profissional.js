module.exports = (sequelize, type) => {
    return sequelize.define('profissional', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: type.STRING,
        cargo: type.STRING,
        matricula: type.STRING,
        titulacao: type.INTEGER,
        rg: type.STRING,
        orgao_expedidor: type.STRING,
        uf: type.STRING,
        cpf: type.STRING,
        pis: type.STRING,
        banco: type.STRING,
        agencia: type.STRING,
        conta: type.STRING,
        endereco: type.STRING,
        bairro: type.STRING,
        cidade: type.STRING,
        estado: type.STRING,
        cep: type.STRING,
        telefone: type.STRING,
        data_nascimento: type.DATE,
        declaração: type.INTEGER,
    })
}