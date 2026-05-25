// =========================================
// ACCORDION
// =========================================

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {

  header.addEventListener("click", () => {

    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

  });

});

// =========================================
// COMENTÁRIOS
// =========================================

const commentButton = document.getElementById("send-comment");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");

commentButton.addEventListener("click", () => {

  const text = commentInput.value.trim();

  if (text === "") {
    alert("Digite um comentário.");
    return;
  }

  const comment = document.createElement("div");
  comment.classList.add("comment-item");

  comment.textContent = text;

  commentList.prepend(comment);

  commentInput.value = "";

});

// =========================================
// FORMULÁRIO
// =========================================

const form = document.getElementById("seminar-form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  alert("Inscrição realizada com sucesso!");

  form.reset();

});

// =========================================
// ACESSIBILIDADE - FONTE
// =========================================

const increaseFontBtn = document.getElementById("increase-font");
const decreaseFontBtn = document.getElementById("decrease-font");

let currentFontSize = 100;

increaseFontBtn.addEventListener("click", () => {

  currentFontSize += 10;

  document.body.style.fontSize = currentFontSize + "%";

});

decreaseFontBtn.addEventListener("click", () => {

  currentFontSize -= 10;

  document.body.style.fontSize = currentFontSize + "%";

});

// =========================================
// MODO ESCURO/CLARO
// =========================================

const toggleThemeBtn = document.getElementById("toggle-theme");

toggleThemeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});

// =========================================
// LEITURA POR VOZ
// =========================================

const startReadingBtn = document.getElementById("start-reading");
const stopReadingBtn = document.getElementById("stop-reading");

let speech;

startReadingBtn.addEventListener("click", () => {

  const mainContent = document.getElementById("main-content");

  const text = mainContent.innerText;

  speech = new SpeechSynthesisUtterance(text);

  speech.lang = "pt-BR";
  speech.rate = 1;

  window.speechSynthesis.speak(speech);

});

stopReadingBtn.addEventListener("click", () => {

  window.speechSynthesis.cancel();

});
