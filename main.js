document.querySelector('.botton-menu').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('here');
});

ScrollReveal().reveal('.img-principal');
ScrollReveal().reveal('.new-part', {delay: 500});
ScrollReveal().reveal('.banner', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});

