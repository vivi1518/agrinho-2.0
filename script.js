document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const msg = document.getElementById('msg');
    msg.textContent = "Obrigado pelo contato! Em breve responderemos.";
    msg.style.color = "#2e7d32";
    this.reset();
});
