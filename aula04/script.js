let tarefas = []

function adicionarTarefa() {

    let inputTarefa = document.getElementById("inputTarefa")

    let tarefa = inputTarefa.value.trim()
    let pmensagem = document.getElementById("mensagem")

    if (tarefa.length === 0) {
        pmensagem.textContent = "Digite um tarefa válida "
        pmensagem.style.color = "red"
    }
    else {
        pmensagem.textContent = "Tarefa adicionada com sucesso!"
        pmensagem.style.color = "green"

        tarefas.push(tarefa)

        renderizarTarefas(tarefas)
    }

    inputTarefa.value = ""
    inputTarefa.focus()
}

function renderizarTarefas() {
    const ulListaTarefas = document.getElementById("ulListaTarefas")
    ulListaTarefas.innerHTML = ""

    for (let i = 0; i < tarefas.length; i++) {
        let liNovaTarefa = document.createElement("li")
        liNovaTarefa.textContent = tarefas[i]
        ulListaTarefas.appendChild(liNovaTarefa)
    }
}
