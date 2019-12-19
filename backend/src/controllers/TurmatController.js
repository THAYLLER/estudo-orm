const { account,curso,disciplina,pagamento,profissional,turma } = require('../../sequelize');

module.exports = {

    async index(req, res) {

        return turma.findAll().then(turma => res.json(turma))
    },
    async show(req, res){

        return turma.findOne({where: { id: req.params.id }}).then(turma => res.json(turma))
        
    },
    async store(req, res){
        const {codigo, idCurso} = req.body;

        const retorno = turma.create({codigo,curso: idCurso});

        return res.json(retorno);
    },
    async update(req, res){
        
        const {codigo, idCurso} = req.body;

        const retorno = turma.update({codigo,curso: idCurso}, { where: { id: req.params.id } });

        return res.json(retorno);
    },
    async destroy(req, res){

        const retorno = turma.destroy({ where: {id: req.params.id}});

        return res.json(retorno);
    },
}