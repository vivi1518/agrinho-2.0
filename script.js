const botao = document.getElementById("toggleTema");

// MODO ESCURO COM SALVAMENTO
botao.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("tema", "light");
  } else {
    localStorage.setItem("tema", "dark");
  }
});

// CARREGAR TEMA SALVO
window.onload = () => {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "light") {
    document.body.classList.add("light");
  }
};
