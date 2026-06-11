```javascript
/* ==========================
   SAUDAÇÃO PERSONALIZADA
========================== */

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

/* ==========================
   GALERIA
========================== */

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

/* ==========================
   ACESSIBILIDADE
========================== */
/* ===== Controle do tamanho da fonte ===== */

let tamanhoFonte = 100;

document.getElementById("aumentarFonte")
    .addEventListener("click", () => {

    tamanhoFonte += 10;

    document.documentElement.style.fontSize =
        tamanhoFonte + "%";
});

document.getElementById("diminuirFonte")
    .addEventListener("click", () => {

    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;

        document.documentElement.style.fontSize =
            tamanhoFonte + "%";
    }
});


/* ===== Modo escuro ===== */

document.getElementById("alternarTema")
    .addEventListener("click", () => {

    document.body.classList.toggle("modo-escuro");
});


/* ===== Leitura por voz ===== */

let fala;

document.getElementById("lerConteudo")
    .addEventListener("click", () => {

    speechSynthesis.cancel();

    /* Seleciona apenas o conteúdo principal */
    const principal =
        document.querySelector("main");

    if (!principal) {
        alert(
            "Adicione uma tag <main> ao conteúdo principal."
        );
        return;
    }

    let texto = "";

    /* Lê apenas títulos e parágrafos */
    principal.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li"
    ).forEach(elemento => {

        texto += elemento.innerText + ". ";
    });

    fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 1;
    fala.pitch = 1;
    fala.volume = 1;

    speechSynthesis.speak(fala);
});


/* ===== Parar leitura ===== */

document.getElementById("pararLeitura")
    .addEventListener("click", () => {

    speechSynthesis.cancel();
});


/* ==========================
   AJUSTE DE TELA
========================== */

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

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.display = "none";

    }, 1500);
});

/* ==========================
   BOTÃO VOLTAR AO TOPO
========================== */

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
