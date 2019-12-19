const { account,curso,disciplina,pagamento,profissional,turma } = require('../../sequelize');

module.exports = {

    async index(req, res) {

        return disciplina.findAll().then(disciplina => res.json(disciplina))
    },
    async show(req, res){

        return disciplina.findOne({where: { id: req.params.id }}).then(disciplina => res.json(disciplina))
        
    },
    async store(req, res){
        const {cargaHoraria, descricao} = req.body;

        const retorno = disciplina.create({descricao,carga_horaria_disciplina:cargaHoraria});

        return res.json(retorno);
    },
    async update(req, res){
        
        const {cargaHoraria, descricao} = req.body;

        const retorno = disciplina.update({cargaHoraria, descricao}, { where: { id: req.params.id } });

        return res.json(retorno);
    },
    async destroy(req, res){

        const retorno = disciplina.destroy({ where: {id: req.params.id}});

        return res.json(retorno);
    },
}