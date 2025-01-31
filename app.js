// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []


function asignarTextoElemento(id, texto){
    let elementoHTML =document.querySelector(id);
    elementoHTML.innerHTML = texto;
    return;

}

function amigoSecreto(amigo){
    amigos.push(amigo);
}


function agregarAmigo(){
    let amigo = (document.getElementById('amigo').value)
    if (amigo.trim() == ''){
        asignarTextoElemento('h2','Por favor, inserte un nombre.');
        agregarAmigo();
    }
    console.log('hola');
    console.log(amigo);
    amigoSecreto(amigo.trim());
    console.log(amigos);
    asignarTextoElemento('h2', `${amigo} guardado, Te gustaria agregar otro amigo?`);
    actualizarListaAmigos();
    condicionesIniciales();
}

function condicionesIniciales(){
    document.querySelector('#amigo').value = '';
}

function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(amigo));
        lista.appendChild(item);
    });
}
function sortearAmigo(){
    if (amigos.length ==0 ){
        asignarTextoElemento('h2','Por favor, inserte al menos un amigo.');
        sortearAmigo();
    } else if (amigos.length ==1){
        asignarTextoElemento('h2','Por favor, inserte al menos dos amigos.');
        sortearAmigo();
    } else {
        var amigoSorteado = amigos[numeroAleatorio(amigos.length)-1];
    }
    asignarTextoElemento('h2', `el amigo que se sorteo es ${amigoSorteado}`);

}

function numeroAleatorio(maxNumber){
    let numeroGenerado =  Math.floor(Math.random() * maxNumber) + 1;
    return numeroGenerado;
}