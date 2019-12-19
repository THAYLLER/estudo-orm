const { account,curso,disciplina,pagamento,profissional,turma } = require('../../sequelize');

module.exports = {

    async index(req, res) {

        return pagamento.findAll().then(pagamento => res.json(pagamento))
    },
    async show(req, res){

        return pagamento.findOne({where: { id: req.params.id }}).then(pagamento => res.json(pagamento))
        
    },
    async store(req, res){
        const {data,valor,periodo,carga_horaria_periodo,horas_em_sala,valor_total,idCurso,idDisciplina,idProfissional} = req.body;

        const retorno = pagamento.create({data,valor,periodo,carga_horaria_periodo,horas_em_sala,valor_total,curso:idCurso,disciplina:idDisciplina,profissional:idProfissional});

        return res.json(retorno);
    },
    async update(req, res){
        
        const {data,valor,periodo,carga_horaria_periodo,horas_em_sala,valor_total,idCurso,idDisciplina,idProfissional} = req.body;

        const retorno = pagamento.update({data,valor,periodo,carga_horaria_periodo,horas_em_sala,valor_total,curso:idCurso,disciplina:idDisciplina,profissional:idProfissional}, { where: { id: req.params.id } });

        return res.json(retorno);
    },
    async destroy(req, res){

        const retorno = pagamento.destroy({ where: {id: req.params.id}});

        return res.json(retorno);
    },
}