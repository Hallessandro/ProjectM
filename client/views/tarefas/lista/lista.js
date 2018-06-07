Template.listaTarefas.helpers({
	tarefas: function () {
		return Tarefas.find({userId: Meteor.userId()});
	}
});

Template.listaTarefas.events({
    "click .btn-excluir": function (e, template) {
        let tarefa = this;

        Tarefas.remove({_id: tarefa._id});
        // Meteor.call("remove", {
        //     _id: tarefa._id
        // });
    },

    "click .btn-editar": function(e, template){
        let tarefa = this;
        let resultado = Tarefas.findOne({_id: tarefa._id});
        if(resultado){
            let inputTitulo= $("#titulo");
            inputTitulo.val(resultado.titulo);
            let inputDescricao = $("#descricao");
            inputDescricao.val(resultado.descricao);
            let inputTempoEstimado = $("#tempoEstimado");
            inputTempoEstimado.val(resultado.tempoEstimado);
            let inputIdTarefa = $("#idTarefa");
            inputIdTarefa.val(resultado._id);
            $("#cadastraTarefa").modal('toggle');
        }
    }
}); 