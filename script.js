document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.getElementById('nav-links');
    const header = document.getElementById('header');

    // Menu Mobile toggle
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (importante para UX mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Efeito de scroll no Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '0.8rem 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '1.2rem 0';
            header.style.backgroundColor = '#ffffff';
        }
    });

    // Revelar elementos ao rolar (Scroll Reveal)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});
