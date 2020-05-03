for (var i = 0; i < window.localStorage.length; i++) {
  texto = window.localStorage.getItem(window.localStorage.key(i));

    let key = window.localStorage.key(i);
    let lista = document.getElementById('lista');
    let div = document.createElement('div');
    let button = document.createElement('i');

    div.className = 'lista-tarefas tarefa-incompleta';
    div.innerHTML = texto;
    button.className = 'fas fa-times';
    button.id = key;
    div.id = `${key}-lista`;

    lista.appendChild(div);
    div.appendChild(button);

    botaoDeletar(document.getElementById(key));
    completarTarefa(lista = document.getElementById(`${key}-lista`));
};

function criarTarefa(texto = document.getElementById('tarefa-input')) {

  function tokenGenerator(){
    return Math.random().toString(36).substr(2); 
  };

  token = tokenGenerator();

  if(texto.value != '') {
    let lista = document.getElementById('lista');
    let div = document.createElement('div');
    let i = document.createElement('i');

    window.localStorage.setItem(token, texto.value);
    texto2 = window.localStorage.getItem(token);
    div.className = 'lista-tarefas tarefa-incompleta';
    div.innerHTML = texto2;
    i.className = 'fas fa-times';
    i.id = token;
    div.id = `${token}-lista`;

    lista.appendChild(div);
    div.appendChild(i);
    
    texto.value = '';
  };
  console.log(token);
};

function botaoDeletar(i = document.getElementById(token)) {

  i.addEventListener("click", function(e) {
    e.stopPropagation();
    window.localStorage.removeItem(i.id);
    i.parentNode.remove();
  });

};

function completarTarefa(lista = document.getElementById(`${token}-lista`)) {
  lista.addEventListener("click", function(e) {
    lista.className = 'lista-tarefas tarefa-concluida';
  });
};
