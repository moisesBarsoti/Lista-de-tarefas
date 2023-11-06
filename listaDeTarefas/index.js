// Seleção de id e class
const inputTarefas = document.querySelector('#input-tarefas');
const buttonTarefas = document.querySelector('#button-tarefas');
const ul = document.querySelector('ul#lista');

// Funções
function adiconarLista(e) {
    const li = document.createElement('li');
    li.innerText = inputTarefas.value
    ul.appendChild(li)
    inputTarefas.value = ''
}

// Eventos de click
buttonTarefas.addEventListener('click',function(e) {
    e.preventDefault()
    adiconarLista()
})

// Eventos de pressionar
inputTarefas.addEventListener('keypress',function(e) {
    if (e.keyCode === 13) {
        adiconarLista()
    } 
})