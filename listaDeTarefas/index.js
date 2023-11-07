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
    inputTarefas.focus()
    buttonApagar(li)
}

function buttonApagar(li) {
    li.innerText += ' ' 
    const button = document.createElement('button');
    button.innerText = 'Apagar'
    li.appendChild(button)
    button.setAttribute('class', 'apagar')
    button.setAttribute('title', 'Apagar este elemnto da lista')
}

// Eventos de click
buttonTarefas.addEventListener('click',function(e) {
    e.preventDefault()
    adiconarLista()
})

document.addEventListener('click', function(e) {
    const elementos = e.target
    
    if (elementos.classList.contains('apagar')) {
        elementos.parentElement.remove()
    }
})

// Eventos de pressionar
inputTarefas.addEventListener('keypress',function(e) {
    if (e.keyCode === 13) {
        adiconarLista()
    } 
   
})

// Condições

