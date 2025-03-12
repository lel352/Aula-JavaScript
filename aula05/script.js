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

    criarBotaoLimparLista()
     

    inputTarefa.value = ""
    inputTarefa.focus()
}

function renderizarTarefas() {
    const ulListaTarefas = document.getElementById("ulListaTarefas")
    ulListaTarefas.innerHTML = ""

    for (let i = 0; i < tarefas.length; i++) {
        let liNovaTarefa = document.createElement("li")
        liNovaTarefa.textContent = tarefas[i]

        let btnBotaoRemover = document.createElement("button")
        btnBotaoRemover.className = "remover"
        btnBotaoRemover.textContent = "Remover"
        btnBotaoRemover.onclick = () => removerTarefa(i) // via js tem que ser assim para 


        let btnBotaoEditar = document.createElement("button")
        btnBotaoEditar.className = "editar"
        btnBotaoEditar.textContent = "Editar"
        btnBotaoEditar.onclick = () => removerEditar(i) // via js tem que ser assim para         

        liNovaTarefa.appendChild(btnBotaoEditar)
        liNovaTarefa.appendChild(btnBotaoRemover)
        ulListaTarefas.appendChild(liNovaTarefa)
    }
}


function removerTarefa(indice) {
    tarefas.splice(indice, 1)
    renderizarTarefas()
    let pmensagem = document.getElementById("mensagem")
    pmensagem.textContent = "Tarefa Removida com sucesso"

    removerBotaoLimparLista()
}

function removerEditar(indice) {
    let tarefaEditada = prompt("Edite a tarefa:")
    if (tarefaEditada.trim() !== "") {
        tarefas[indice] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    let pmensagem = document.getElementById("mensagem")
    pmensagem.textContent = "Lista de tarefas limpa  com sucesso"
    renderizarTarefas()

    removerBotaoLimparLista()
}

function removerBotaoLimparLista() {
    if (tarefas.length <= 0) {
        let btnLimparTarefas = document.getElementById("btnLimparTarefas")
        btnLimparTarefas.remove()
    }
}

function criarBotaoLimparLista() {
    if (tarefas.length > 0) {
        if (!document.getElementById("btnLimparTarefas")) {

            let btnLimparTarefas = document.createElement("button")
            btnLimparTarefas.className = "botao_lista"
            btnLimparTarefas.textContent = "Limpar Tarefas"
            btnLimparTarefas.id = "btnLimparTarefas"
            btnLimparTarefas.onclick = () => limparLista() // via js tem que ser assim para 

            let btnAddTarefa = document.getElementById("btnAddTarefa")
            btnAddTarefa.insertAdjacentElement('afterend', btnLimparTarefas)
        }
    }
}