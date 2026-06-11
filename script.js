const inicio = new Date("2026-01-11");

function atualizarTempo(){

    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(
        diferenca /
        (1000*60*60*24)
    );

    document.getElementById("tempo")
    .innerHTML =
    dias + " dias ❤️";
}

atualizarTempo();

setInterval(
    atualizarTempo,
    1000
);

const motivos = [

"Seu sorriso ilumina meus dias ❤️",

"Seu abraço é meu lugar favorito ❤️",

"Você me faz feliz ❤️",

"Você transforma tudo em algo especial ❤️",

"Porque eu amo estar ao seu lado ❤️"

];

function mostrarMotivo(){

    const indice =
    Math.floor(
    Math.random()
    * motivos.length);

    document.getElementById("motivo")
    .innerHTML =
    motivos[indice];
}

const container =
document.querySelector(
".hearts-container"
);

for(let i=0;i<40;i++){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random()*100 + "%";

    heart.style.fontSize =
    (20 + Math.random()*25)
    + "px";

    heart.style.animationDelay =
    Math.random()*10 + "s";

    container.appendChild(heart);
}

if("serviceWorker" in navigator){

    navigator.serviceWorker.register(
    "service-worker.js"
    );
}
