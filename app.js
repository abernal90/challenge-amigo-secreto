// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroMaximo = 10;

function sortearAmigo(){
    if (amigos.length !== 0){
        let posicion =  Math.floor(Math.random() * amigos.length);
        let elementoResultado =  obtenerElmentoLista('resultado');
        agregarElementoLista(elementoResultado, amigos[posicion]);
        limpiarElmentoLista('listaAmigos');
    }else{
        alert('Por favor, inserte un nombre.');
    }
}

function actualizarListaAmigo(){
    let elementoLista = obtenerElmentoLista('listaAmigos'); 
    for(let i = 0; i < amigos.length; i++){
        agregarElementoLista(elementoLista, amigos[i]);
    }
}

function agregarElementoLista(elemento, valor){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(valor));
    elemento.appendChild(li);
}

function agregarAmigo(){
   let amigo = document.getElementById('amigo').value;
   if(amigo === ''){
        alert('Por favor, inserte un nombre.');
   } else{
        amigos.push(amigo);
        actualizarListaAmigo();
        limpiarCaja();
        limpiarElmentoLista('resultado');
   }
   console.log(amigos);
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function obtenerElmentoLista(elemento) {
    limpiarElmentoLista(elemento);
    return document.getElementById(elemento);
}

function limpiarElmentoLista(elemento) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = "";
}

