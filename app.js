/* Para añadir un juego nuevo, edita SOLO el array APPS de app.js.
   Todo (tarjeta, insignia, botones) se genera solo. */

const APPS = [
  {
    id: "sketchboom",
    name: "Sketchboom",
    tagline: "Dibuja y adivina en equipo",
    desc: "El juego de dibujar y reír sin parar: tira el dado, dibuja la palabra y que tu equipo la adivine antes de que acabe el tiempo. Multijugador online, en 12 idiomas.",
    icon: { type: "img", src: "assets/sketchboom.svg", alt: "Sketchboom" },
    status: "publicado", // "publicado" | "desarrollo"
    playUrl: null,       // pega aquí el enlace de Google Play cuando exista
    legalUrl: "sketchboom/privacy-policy.html",
  },
  {
    id: "ccifra",
    name: "CCifra",
    tagline: "Concurso de letras",
    desc: "Quiz de palabras letra a letra: una definición por cada letra, acierta la palabra exacta y completa el círculo sin fallar.",
    icon: { type: "letter", letter: "C", bg: "linear-gradient(135deg,#0ea5e9,#6366f1)" },
    status: "desarrollo",
    playUrl: null,
    legalUrl: null,
  },
  {
    id: "encadenados",
    name: "Encadenados",
    tagline: "Puzzle diario de palabras",
    desc: "Un reto nuevo cada día: encadena palabras donde cada una empieza con la sílaba final de la anterior. ¿Cuántas seguidas aguantas?",
    icon: { type: "letter", letter: "E", bg: "linear-gradient(135deg,#34c759,#0ea5e9)" },
    status: "desarrollo",
    playUrl: null,
    legalUrl: null,
  },
];

const STATUS_LABEL = { publicado: "Publicado", desarrollo: "En desarrollo" };

function iconHtml(app) {
  if (app.icon.type === "img") {
    return `<img class="game-icon" src="${app.icon.src}" alt="${app.icon.alt || app.name}" width="72" height="72" loading="lazy">`;
  }
  return `<span class="game-icon game-letter" style="background:${app.icon.bg}" aria-hidden="true">${app.icon.letter}</span>`;
}

function cardHtml(app) {
  const storeBtn = app.playUrl
    ? `<a class="btn btn-store" href="${app.playUrl}" target="_blank" rel="noopener">▶ Google Play</a>`
    : app.status === "publicado"
      ? `<span class="btn btn-soon">Disponible muy pronto en Google Play</span>`
      : "";
  const legalBtn = app.legalUrl
    ? `<a class="btn btn-ghost" href="${app.legalUrl}">Privacidad</a>`
    : "";
  return `
  <article class="card">
    ${iconHtml(app)}
    <div class="card-head">
      <h2>${app.name}</h2>
      <span class="badge badge-${app.status}">${STATUS_LABEL[app.status]}</span>
    </div>
    <p class="tagline">${app.tagline}</p>
    <p class="desc">${app.desc}</p>
    <div class="actions">${storeBtn}${legalBtn}</div>
  </article>`;
}

document.getElementById("games").innerHTML = APPS.map(cardHtml).join("");
