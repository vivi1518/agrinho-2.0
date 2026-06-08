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

let tamanhoFonte = 16;

function alterarFonte(valor) {

    tamanhoFonte += valor;

    if (tamanhoFonte < 12) tamanhoFonte = 12;
    if (tamanhoFonte > 32) tamanhoFonte = 32;

    document.documentElement.style.fontSize =
    tamanhoFonte + "px";
}

/* ==========================
   MODO ESCURO
========================== */

function alternarTema() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "tema",
        document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );
}

/* Carrega tema salvo */

window.addEventListener("DOMContentLoaded", () => {

    if (
        localStorage.getItem("tema") === "dark"
    ) {

        document.body.classList.add("dark");

    }
});

/* ==========================
   LEITURA POR VOZ
========================== */

function lerPagina() {

    pararLeitura();

    const conteudo =
    document.querySelector("main") ||
    document.querySelector("section");

    const texto = conteudo
        ? conteudo.innerText
        : document.body.innerText;

    const fala =
    new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 1;
    fala.pitch = 1;

    speechSynthesis.speak(fala);
}

function pararLeitura() {

    speechSynthesis.cancel();
}

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
