// ── CONTADOR ──────────────────────────────────
const inicio = new Date("2026-01-11");

function atualizarTempo() {
  const agora = new Date();
  const dias = Math.floor((agora - inicio) / (1000 * 60 * 60 * 24));
  const el = document.getElementById("tempo");
  if (el) el.textContent = dias;
}

atualizarTempo();
setInterval(atualizarTempo, 60000);

// ── MOTIVOS ───────────────────────────────────
const motivos = [
  "Seu sorriso ilumina meus dias ❤️",
  "Seu abraço é meu lugar favorito ❤️",
  "Você me faz feliz ❤️",
  "Você transforma tudo em algo especial ❤️",
  "Você é meu amor ❤️",
  "Seu jeito único de ser me encanta ❤️",
  "Com você, cada dia é especial ❤️",
];

function mostrarMotivo() {
  const el = document.getElementById("motivo");
  if (!el) return;
  el.style.opacity = "0";
  setTimeout(() => {
    const i = Math.floor(Math.random() * motivos.length);
    el.textContent = motivos[i];
    el.style.opacity = "1";
  }, 200);
}

// ── LIGHTBOX ──────────────────────────────────
function abrirFoto(item) {
  const src = item.querySelector("img").src;
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  lbImg.src = src;
  lb.classList.add("active");
  document.body.style.overflow = "hidden";
}

function fecharFoto() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") fecharFoto();
});

// ── CORAÇÕES SUBINDO ──────────────────────────
function criarCoracoes() {
  const container = document.getElementById("heartsBg");
  if (!container) return;

  const total = 22;
  for (let i = 0; i < total; i++) {
    const hrt = document.createElement("span");
    hrt.className = "hrt";
    hrt.textContent = "♥";

    const left  = Math.random() * 100;
    const delay = Math.random() * 18;
    const dur   = 14 + Math.random() * 12;
    const size  = 0.6 + Math.random() * 1.2;

    hrt.style.cssText = `
      left: ${left}%;
      animation-delay: ${delay}s;
      animation-duration: ${dur}s;
      font-size: ${size}rem;
      opacity: 0;
    `;
    container.appendChild(hrt);
  }
}

criarCoracoes();

// ── SERVICE WORKER ────────────────────────────
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}
