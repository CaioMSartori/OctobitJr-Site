document.addEventListener('DOMContentLoaded', function() {
    // Animação do conteúdo do header
    gsap.to('.header-content h1', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.to('.header-content h2', { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.to('.header-content ul', { opacity: 1, y: 0, duration: 1, delay: 1.5 });
    gsap.to('.social-icons', { opacity: 1, y: 0, duration: 1, delay: 2 });
    gsap.to('.logo', { opacity: 1, y: 0, duration: 1, delay: 2.5 });
    
    // Função para verificar se o elemento está visível
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }

    // Função para animar os elementos do about quando estiverem visíveis
    function animateOnScroll() {
        const aboutContainer = document.querySelector('.about-container');
        const aboutImg = document.querySelector('.about-img');

        if (isElementInViewport(aboutContainer)) {
            gsap.to(aboutContainer, { opacity: 1, y: 0, duration: 0.7 });
        }

        if (isElementInViewport(aboutImg)) {
            gsap.to(aboutImg, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 });
        }
    }

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});