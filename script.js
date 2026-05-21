/* ========================= */
/* ACCORDION */
/* ========================= */

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

  const button = accordion.querySelector(".accordion-btn");

  button.addEventListener("click", () => {

    accordion.classList.toggle("active");

  });

});

/* ========================= */
/* ACESSIBILIDADE */
/* ========================= */

let tamanhoFonte = 16;

const aumentarFonte =
document.getElementById("aumentarFonte");

const diminuirFonte =
document.getElementById("diminuirFonte");

const alternarTema =
document.getElementById("alternarTema");

aumentarFonte.addEventListener("click", () => {

  tamanhoFonte += 1;

  document.documentElement.style.fontSize =
  `${tamanhoFonte}px`;

});

diminuirFonte.addEventListener("click", () => {

  tamanhoFonte -= 1;

  document.documentElement.style.fontSize =
  `${tamanhoFonte}px`;

});

/* ========================= */
/* MODO ESCURO/CLARO */
/* ========================= */

alternarTema.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});

/* ========================= */
/* LEITURA POR VOZ */
/* ========================= */

const lerConteudo =
document.getElementById("lerConteudo");

const pararLeitura =
document.getElementById("pararLeitura");

let fala;

lerConteudo.addEventListener("click", () => {

  const texto =
  document.getElementById("conteudo").innerText;

  fala = new SpeechSynthesisUtterance(texto);

  fala.lang = "pt-BR";

  fala.rate = 1;

  speechSynthesis.speak(fala);

});

pararLeitura.addEventListener("click", () => {

  speechSynthesis.cancel();

});

/* ========================= */
/* FORMULÁRIO */
/* ========================= */

const formulario =
document.querySelector("form");

formulario.addEventListener("submit", (e) => {

  e.preventDefault();

  alert(
    "Inscrição enviada com sucesso!"
  );

  formulario.reset();

});
