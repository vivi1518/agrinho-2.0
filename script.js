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
