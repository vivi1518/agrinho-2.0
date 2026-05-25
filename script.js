// =========================================
// ACCORDION
// =========================================

const accordionHeaders =
  document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {

  header.addEventListener("click", () => {

    const content =
      header.nextElementSibling;

    const isOpen =
      content.style.maxHeight;

    // Fecha todos

    document
      .querySelectorAll(".accordion-content")
      .forEach((item) => {
        item.style.maxHeight = null;
      });

    // Abre o atual

    if (!isOpen) {
      content.style.maxHeight =
        content.scrollHeight + "px";
    }

  });

});

// =========================================
// COMENTÁRIOS
// =========================================

const sendCommentButton =
  document.getElementById("send-comment");

const commentInput =
  document.getElementById("comment-input");

const commentsList =
  document.getElementById("comments-list");

sendCommentButton.addEventListener("click", () => {

  const text =
    commentInput.value.trim();

  if (text === "") {

    alert("Digite um comentário.");
    return;

  }

  const comment =
    document.createElement("div");

  comment.classList.add("comment-item");

  comment.textContent = text;

  commentsList.prepend(comment);

  commentInput.value = "";

});

// =========================================
// FORMULÁRIO
// =========================================

const seminarForm =
  document.getElementById("seminar-form");

seminarForm.addEventListener("submit", (event) => {

  event.preventDefault();

  alert("Inscrição realizada com sucesso!");

  seminarForm.reset();

});

// =========================================
// ACESSIBILIDADE - FONTE
// =========================================

const increaseFontButton =
  document.getElementById("increase-font");

const decreaseFontButton =
  document.getElementById("decrease-font");

let currentFontSize = 100;

increaseFontButton.addEventListener("click", () => {

  if (currentFontSize < 150) {

    currentFontSize += 10;

    document.body.style.fontSize =
      currentFontSize + "%";

  }

});

decreaseFontButton.addEventListener("click", () => {

  if (currentFontSize > 80) {

    currentFontSize -= 10;

    document.body.style.fontSize =
      currentFontSize + "%";

  }

});

// =========================================
// MODO ESCURO / CLARO
// =========================================

const toggleThemeButton =
  document.getElementById("toggle-theme");

toggleThemeButton.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});

// =========================================
// LEITURA POR VOZ
// =========================================

const startReadingButton =
  document.getElementById("start-reading");

const stopReadingButton =
  document.getElementById("stop-reading");

let speech;

startReadingButton.addEventListener("click", () => {

  window.speechSynthesis.cancel();

  const mainContent =
    document.getElementById("main-content");

  const text =
    mainContent.innerText;

  speech =
    new SpeechSynthesisUtterance(text);

  speech.lang = "pt-BR";
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);

});

stopReadingButton.addEventListener("click", () => {

  window.speechSynthesis.cancel();

});
