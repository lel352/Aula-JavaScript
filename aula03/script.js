function adicionarTarefa() {
    let ulListaTarefas = document.getElementById("ulListaTarefas")
    let inputTarefa = document.getElementById("inputTarefa")

    let tarefa = inputTarefa.value.trim()
    let pmensagem = document.getElementById("mensagem")

    if (tarefa.length === 0){
        pmensagem.textContent = "Digite um tarefa válida "
        pmensagem.style.color = "red"
    }
    else {
        pmensagem.textContent = "Tarefa adicionada com sucesso!"
        pmensagem.style.color = "green"

        let liNovaTarefa = document.createElement("li")
        liNovaTarefa.textContent = tarefa
        ulListaTarefas.appendChild(liNovaTarefa)
    }

    inputTarefa.value = ""
    inputTarefa.focus()
}
