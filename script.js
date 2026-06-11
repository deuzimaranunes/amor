const inicio = new Date("2026-01-11");

function atualizarTempo() {

    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    document.getElementById("tempo")
        .innerHTML = dias + " dias ❤️";
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

    "Você é meu amor ❤️"

];

function mostrarMotivo() {

    const indice = Math.floor(
        Math.random() * motivos.length
    );

    document.getElementById("motivo")
        .innerHTML = motivos[indice];
}

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register(
        "service-worker.js"
    );
}