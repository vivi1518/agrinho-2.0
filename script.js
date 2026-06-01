// ACCORDION

document.querySelectorAll(".accordion-btn")
.forEach(botao => {

botao.addEventListener("click", () => {

const conteudo = botao.nextElementSibling;

conteudo.style.display =
conteudo.style.display === "block"
? "none"
: "block";

});

});

// MODO ESCURO

const modoTema =
document.getElementById("modoTema");

modoTema.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

// TAMANHO DA FONTE

let tamanhoAtual = 16;

document
.getElementById("aumentarFonte")
.addEventListener("click", () => {

tamanhoAtual += 2;

document.documentElement.style.fontSize =
tamanhoAtual + "px";

});

document
.getElementById("diminuirFonte")
.addEventListener("click", () => {

tamanhoAtual -= 2;

if(tamanhoAtual < 12){
tamanhoAtual = 12;
}

document.documentElement.style.fontSize =
tamanhoAtual + "px";

});

// LEITURA POR VOZ

const sintetizador =
window.speechSynthesis;

document
.getElementById("lerConteudo")
.addEventListener("click", () => {

sintetizador.cancel();

const blocos =
document.querySelectorAll(".leitura");

let texto = "";

blocos.forEach(bloco => {
texto += bloco.innerText + " ";
});

const fala =
new SpeechSynthesisUtterance(texto);

fala.lang = "pt-BR";
fala.rate = 1;
fala.pitch = 1;

sintetizador.speak(fala);

});

// PARAR LEITURA

document
.getElementById("pararLeitura")
.addEventListener("click", () => {

sintetizador.cancel();

});

// FORMULÁRIO

document
.querySelector(".formulario")
.addEventListener("submit", (e)=>{

e.preventDefault();

alert(
"Inscrição enviada com sucesso!"
);

});

// COMENTÁRIOS

document
.querySelector(".comentarios button")
.addEventListener("click", ()=>{

const texto =
document.querySelector("textarea");

if(texto.value.trim() !== ""){

alert("Comentário enviado!");

texto.value = "";

}

});
