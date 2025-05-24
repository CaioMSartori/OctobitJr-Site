window.addEventListener('DOMContentLoaded', () => {
    // Lista única de membros
    const membros = {
      Felipe: { img: './img/Membros/Felipe.jpeg', desc: 'Descrição do membro 1.' },
      Taysa: { img: './img/Membros/Taysa.jpeg', desc: 'Descrição do membro 2.' },
      Isa: { img: './img/Membros/Isa.jpg', desc: 'Descrição do membro 3.' },
      Anna: { img: './img/Membros/Anna.jpeg', desc: 'Descrição do membro 5.' },
      Caio: { img: './img/Membros/Caio.jpeg', desc: 'Descrição do membro 4.' },
      Arthur: { img: './img/Membros/Arthur.jpeg', desc: 'Descrição do membro 6.' },
      Diogo: { img: './img/Membros/Diogo.jpeg', desc: 'Descrição do membro 6.' },
      Marcus: { img: './img/Membros/Marcus.jpg', desc: 'Descrição do membro 6.' },
      Vinícius: { img: './img/Membros/Vini.jpeg', desc: 'Descrição do membro 6.' },
      Yuji: { img: './img/Membros/Yuji.jpeg', desc: 'Descrição do membro 6.' },
      Gabriel: { img: './img/Membros/Ferrari.jpg', desc: 'Descrição do membro 6.' },
      Gabriela: { img: './img/Membros/Gabi.jpeg', desc: 'Descrição do membro 6.' },
    };
  
    // Grupos com nomes dos membros
    const equipes = {
      'diretoria': ['Felipe', 'Taysa', 'Isa', 'Anna'],
      'marketing': ['Gabriela', 'Arthur','Isa'],
      'comercial': ['Gabriel', 'Taysa', 'Yuji', 'Marcus'],
      'Financeiro': ['Anna', 'Diogo', 'Felipe'],
      'RH': ['Vinícius', 'Caio','Felipe'],
    };
  
    // Função para criar o card
    const criarCard = (nome) => {
      const membro = membros[nome];
      const card = document.createElement('div');
      card.className = 'membro-card';
      card.innerHTML = `
        <img src="${membro.img}" alt="Foto ${nome}">
        <h3>${nome}</h3>
      `;
      return card;
    };
  
    // Preencher cada equipe com base nos nomes
    Object.entries(equipes).forEach(([idArea, nomes]) => {
      const area = document.getElementById(idArea);
      nomes.forEach(nome => {
        if (membros[nome]) {
          area.appendChild(criarCard(nome));
        }
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    // Animação do conteúdo do header
    gsap.to('.header-content h1', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.to('.header-content h2', { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.to('.header-content ul', { opacity: 1, y: 0, duration: 1, delay: 1.5 });
    gsap.to('.social-icons', { opacity: 1, y: 0, duration: 1, delay: 2 });
    gsap.to('.banner-image', { opacity: 1, y: 0, duration: 1, delay: 2.5 });
    
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
        const equipe = document.querySelector('.equipe-content');
        const projetos = document.querySelector('.projetos');

        if (isElementInViewport(aboutContainer)) {
            gsap.to(aboutContainer, { opacity: 1, y: 0, duration: 0.7 });
        }
        if (isElementInViewport(aboutImg)) {
            gsap.to(aboutImg, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 });
        }
        if(isElementInViewport(equipe)) {
            gsap.to(equipe, { opacity: 1, y: 0, duration: 0.7 });
        }
        if(isElementInViewport(projetos)) {
            gsap.to(projetos, { opacity: 1, y: 0, duration: 0.7 });
        }
    }

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
  });
