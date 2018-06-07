Template.cadastrarTarefa.events({
    "submit form" : function (e, template) {
            e.preventDefault();

            let inputTitulo= $("#titulo");
            let titulo = inputTitulo.val();

            let inputDescricao = $("#descricao");
            let descricao = inputDescricao.val();

            let inputTempoEstimado = $("#tempoEstimado");
            let tempoEstimado = inputTempoEstimado.val();

            let inputIdTarefa = $("#idTarefa");
            let idTarefa = inputIdTarefa.val();
            //Se id não for vazio será feito update
            if(idTarefa){
                Tarefas.update({_id: idTarefa}, {
                    $set: {
                        titulo: titulo, 
                        descricao: descricao, 
                        tempoEstimado: tempoEstimado
                    }
                });
            }else {
                Tarefas.insert({
                    titulo: titulo, 
                    dataCadastro: new Date(), 
                    descricao: descricao, 
                    tempoEstimado: tempoEstimado,
                    userId: Meteor.userId()
                });
            }
            //Meteor.call("cadastrar",{titulo: titulo, dataCadastro: new Date(), descricao: descricao, tempoEstimado: tempoEstimado});
            inputTempoEstimado.val("");
            inputDescricao.val("");
            inputTitulo.val("");
            $("#cadastraTarefa").modal('toggle');
    }
});