// Створи веб-сторінку, на якій є список секцій, кожна з яких має різний фон. Використовуючи IntersectionObserver, потрібно відстежувати, коли секція стає видимою у вікні перегляду (viewport), і змінювати текст у хедері сторінки на назву цієї секції.







const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

// let option = {
//     root: div,
//     rootMargin: '0px',
//     threshold: 0.5,
// }

let observer = new IntersectionObserver(entries => {
    entries.forEach(el => {
        if(el.isIntersecting) {
            header.textContent = el.target.textContent
        }
    });

}, {threshold:0.8});

sections.forEach(section => observer.observe(section));










