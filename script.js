// ACCORDION

document.querySelectorAll(".accordion-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const content = btn.nextElementSibling;

        content.style.display =
        content.style.display === "block"
        ? "none"
        : "block";

    });

});

// MODO ESCURO

const themeBtn = document.getElementById("toggleTheme");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// TAMANHO DA FONTE

let currentSize = 16;

document.getElementById("increaseFont")
.addEventListener("click", () => {

    currentSize += 2;
    document.documentElement.style.setProperty(
        "--font-size",
        currentSize + "px"
    );

});

document.getElementById("decreaseFont")
.addEventListener("click", () => {

    currentSize -= 2;

    if(currentSize < 12){
        currentSize = 12;
    }

    document.documentElement.style.setProperty(
        "--font-size",
        currentSize + "px"
    );

});

// LEITURA POR VOZ

let speech = null;

document.getElementById("readContent")
.addEventListener("click", () => {

    const text =
    document.getElementById("main-content").innerText;

    speech = new SpeechSynthesisUtterance(text);

    speech.lang = "pt-BR";
    speech.rate = 1;

    window.speechSynthesis.speak(speech);

});

document.getElementById("stopReading")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});
