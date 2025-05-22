document.addEventListener('DOMContentLoaded', function() {
    // Animação do conteúdo do header
    gsap.to('.header-content h1', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.to('.header-content h2', { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.to('.header-content ul', { opacity: 1, y: 0, duration: 1, delay: 1.5 });
    gsap.to('.social-icons', { opacity: 1, y: 0, duration: 1, delay: 2 });
    gsap.to('.logo', { opacity: 1, y: 0, duration: 1, delay: 2.5 });
});