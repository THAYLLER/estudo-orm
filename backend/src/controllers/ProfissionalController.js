const { account,curso,disciplina,pagamento,profissional,turma } = require('../../sequelize');

module.exports = {

    async index(req, res) {

        return profissional.findAll().then(profissional => res.json(profissional))
    },
    async show(req, res){

        return profissional.findOne({where: { id: req.params.id }}).then(profissional => res.json(profissional))
        
    },
    async store(req, res){
        const {nome,cargo,matricula,titulacao,rg,orgao_expedidor,uf,cpf,pis,banco,agencia,conta,endereco,bairro,cidade,estado,cep,telefone,data_nascimento,declaracao} = req.body;

        const retorno = profissional.create({nome,cargo,matricula,titulacao,rg,orgao_expedidor,uf,cpf,pis,banco,agencia,conta,endereco,bairro,cidade,estado,cep,telefone,data_nascimento,declaracao});

        return res.json(retorno);
    },
    async update(req, res){
        
        const {nome,cargo,matricula,titulacao,rg,orgao_expedidor,uf,cpf,pis,banco,agencia,conta,endereco,bairro,cidade,estado,cep,telefone,data_nascimento,declaração} = req.body;

        const retorno = profissional.update({nome,cargo,matricula,titulacao,rg,orgao_expedidor,uf,cpf,pis,banco,agencia,conta,endereco,bairro,cidade,estado,cep,telefone,data_nascimento,declaracao}, { where: { id: req.params.id } });

        return res.json(retorno);
    },
    async destroy(req, res){

        const retorno = profissional.destroy({ where: {id: req.params.id}});

        return res.json(retorno);
    },
}