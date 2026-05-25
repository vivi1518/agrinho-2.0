// ACCORDION

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

  button.addEventListener("click", () => {

    const content = button.nextElementSibling;

    content.style.display =
      content.style.display === "block"
      ? "none"
      : "block";

  });

});

// DARK MODE

const toggleTheme = document.getElementById("toggle-theme");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// AUMENTAR FONTE

let currentFontSize = 16;

document.getElementById("increase-font")
.addEventListener("click", () => {

  currentFontSize += 1;
  document.body.style.fontSize = currentFontSize + "px";

});

// DIMINUIR FONTE

document.getElementById("decrease-font")
.addEventListener("click", () => {

  currentFontSize -= 1;
  document.body.style.fontSize = currentFontSize + "px";

});

// LEITURA POR VOZ

let speech;

document.getElementById("read-page")
.addEventListener("click", () => {

  const content = document.getElementById("conteudo-principal").innerText;

  speech = new SpeechSynthesisUtterance(content);

  speech.lang = "pt-BR";

  window.speechSynthesis.speak(speech);

});

// PARAR LEITURA

document.getElementById("stop-reading")
.addEventListener("click", () => {

  window.speechSynthesis.cancel();

});
