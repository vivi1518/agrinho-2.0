```javascript

function saudacao() {

    const nome = document.getElementById("nome");
    const resposta = document.getElementById("resposta");

    if (!nome || !resposta) return;

    if (nome.value.trim() === "") {

        resposta.innerText =
        "Por favor, digite seu nome.";

    } else {

        resposta.innerText =
        `Olá, ${nome.value}! Seja bem-vindo(a) 🌱`;

    }
}

/* 
   GALERIA
*/

function toggleGaleria() {

    const galeria =
    document.getElementById("galeriaImagens");

    if (!galeria) return;

    if (
        galeria.style.display === "none" ||
        galeria.style.display === ""
    ) {

        galeria.style.display = "flex";

    } else {

        galeria.style.display = "none";

    }
}

/* 
   ACESSIBILIDADE
*/
// Controle do tamanho da fonte
let tamanhoFonte = 100;

function alterarFonte(valor) {
    tamanhoFonte += valor * 10;

    if (tamanhoFonte < 80) tamanhoFonte = 80;
    if (tamanhoFonte > 150) tamanhoFonte = 150;

    document.body.style.fontSize = tamanhoFonte + "%";
}

// Alternar modo escuro
function alternarTema() {
    document.body.classList.toggle("dark-mode");
}

// Leitura por voz
function lerConteudo() {
    speechSynthesis.cancel();

    const principal = document.querySelector("main") || document.body;

    let texto = "";

    principal.querySelectorAll(
        "h1, h2, h3, p, li, span"
    ).forEach(elemento => {
        texto += elemento.innerText + ". ";
    });

    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.rate = 1;

    speechSynthesis.speak(fala);
}

// Parar leitura
function pararLeitura() {
    speechSynthesis.cancel();
}

/*
   AJUSTE DE TELA
*/

function ajustarTela() {

    const container =
    document.getElementById("container");

    if (container) {

        container.style.minHeight =
        window.innerHeight + "px";

    }
}

window.addEventListener(
    "resize",
    ajustarTela
);

window.addEventListener(
    "DOMContentLoaded",
    ajustarTela
);

/*
   LOADER
*/

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.display = "none";

    }, 1500);
});

/*
   BOTÃO VOLTAR AO TOPO
*/

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const topBtn =
        document.getElementById("topBtn");

        if (!topBtn) return;

        topBtn.style.display = "none";

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 300
                ) {

                    topBtn.style.display =
                    "block";

                } else {

                    topBtn.style.display =
                    "none";

                }
            }
        );

        topBtn.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );
    }
);
```
