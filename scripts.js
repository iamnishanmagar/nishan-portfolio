// ===========================
// Typing Animation
// ===========================
const typingEl = document.querySelector('.typing');
const words = ['Frontend Developer', 'Flutter Developer', 'UI/UX Enthusiast'];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
    const currentWord = words[i];

    if (!isDeleting) {
        typingEl.textContent = currentWord.substring(0, j++);
    } else {
        typingEl.textContent = currentWord.substring(0, j--);
    }

    if (!isDeleting && j === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

if (typingEl) {
    typeEffect();
}

// ===========================
// Card Load Animation
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    function animateCardsOnLoad() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 200);
        });
    }

    animateCardsOnLoad();
});

// ===========================
// Scroll Reveal Animation
// ===========================
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===========================
// Scroll Indicator Bar
// ===========================
const scrollBar = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (scrollBar) {
        scrollBar.style.width = scrollPercent + '%';
    }
});