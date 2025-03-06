function adicionarTarefa() {


    let ulListaTarefas = document.getElementById("ulListaTarefas")
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value
    let mensagem = "Tarefa adicionada com sucesso!"



    if (tarefa.length === 0){
        mensagem = "Digite um tarefa válida "
    }
    else {

        let liNovaTarefa = document.createElement("li")
        liNovaTarefa.textContent = tarefa

        ulListaTarefas.appendChild(liNovaTarefa)

    }


    document.getElementById("mensagem").textContent = mensagem
    inputTarefa.value = ""
    inputTarefa.focus()

}