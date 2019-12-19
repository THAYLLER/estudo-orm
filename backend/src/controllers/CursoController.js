const { account,curso,disciplina,pagamento,profissional,turma } = require('../../sequelize');

module.exports = {

    async index(req, res) {

        return curso.findAll().then(curso => res.json(curso))
    },
    async show(req, res){

        return curso.findOne({where: { id: req.params.id }}).then(curso => res.json(curso))
        
    },
    async store(req, res){
        const {data_inicio,descricao,ultima_parcela_paga_coordenador} = req.body;

        const retorno = curso.create({data_inicio,descricao,ultima_parcela_paga_coordenador});

        return res.json(retorno);
    },
    async update(req, res){
        
        const {data_inicio,descricao,ultima_parcela_paga_coordenador} = req.body;

        const retorno = curso.update({data_inicio,descricao,ultima_parcela_paga_coordenador}, { where: {id: req.params.id} });

        return res.json(retorno);
    },
    async destroy(req, res){

        const retorno = curso.destroy({ where: {id: req.params.id}});

        return res.json(retorno);
    },
}