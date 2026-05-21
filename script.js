// ========================================
// ACCORDION
// ========================================

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {

  header.addEventListener("click", () => {

    const content = header.nextElementSibling;

    const isOpen = content.style.maxHeight;

    document.querySelectorAll(".accordion-content").forEach(item => {
      item.style.maxHeight = null;
    });

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
    }

  });

});

// ========================================
// MODO ESCURO / CLARO
// ========================================

const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// ========================================
// CONTROLE DE FONTE
// ========================================

let currentFontSize = 16;

const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");

increaseFont.addEventListener("click", () => {
  currentFontSize += 1;
  document.documentElement.style.fontSize = currentFontSize + "px";
});

decreaseFont.addEventListener("click", () => {

  if(currentFontSize > 12){
    currentFontSize -= 1;
    document.documentElement.style.fontSize = currentFontSize + "px";
  }

});

// ========================================
// LEITURA POR VOZ
// ========================================

const readPage = document.getElementById("readPage");
const stopReading = document.getElementById("stopReading");

readPage.addEventListener("click", () => {

  window.speechSynthesis.cancel();

  const mainContent = document.getElementById("main-content").innerText;

  const speech = new SpeechSynthesisUtterance(mainContent);

  speech.lang = "pt-BR";
  speech.rate = 1;

  window.speechSynthesis.speak(speech);

});

stopReading.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

// ========================================
// FORMULÁRIO
// ========================================

const form = document.querySelector(".seminar-form form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  alert("Inscrição realizada com sucesso!");

  form.reset();

});

// ========================================
// COMENTÁRIOS
// ========================================

const commentButton = document.querySelector(".comment-box button");

commentButton.addEventListener("click", () => {

  const textarea = document.querySelector(".comment-box textarea");

  if(textarea.value.trim() === ""){

    alert("Digite um comentário antes de enviar.");
    return;

  }

  alert("Comentário enviado com sucesso!");

  textarea.value = "";

});
