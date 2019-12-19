const { account,curso,disciplina,pagamento,profissional,turma } = require('../../sequelize');

module.exports = {

    async index(req, res) {

        return account.findAll().then(account => res.json(account))
    },
    async show(req, res){

        return account.findOne({where: { id: req.params.id }}).then(account => res.json(account))
        
    },
    async store(req, res){
        const {login, senha} = req.body;

        const retorno = account.create({login,senha});

        return res.json(retorno);
    },
    async update(req, res){
        const {id} = parseInt(req.params.id);
        const {login, senha} = req.body;

        const retorno = account.update({ login:login, senha:senha }, { where: { id: id } });

        return res.json(retorno);
    },
    async destroy(req, res){

        const retorno = account.destroy({ where: {id: req.params.id}});

        return res.json(retorno);
    },
}