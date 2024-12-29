
// В JavaScript створіть новий екземпляр IntersectionObserver, щоб стежити за видимістю зображень. Встановіть порігове значення threshold на 0.5, щоб зображення з'являлися, коли вони перетинають половину видимої зони


// Створити HTML розмітку, яка містить зображення, які потрібно ліниво завантажити. Для кожного зображення потрібно вказати два атрибути: src з посиланням на пусту картинку (placeholder) та data-src з посиланням на фактичне зображення.


// <img src="placeholder.jpg" data-src="image.jpg" alt="Lazy loaded image">
// Створити CSS стилі для картинок, які мають бути ліниво завантажені. Встановіть розмір картинок та обрамлення, щоб вони не "перескакували" коли вони будуть замінені на фактичні зображення.
// .lazy-img {
//   width: 100%;
//   height: auto;
//   border: 1px solid #ccc;
// }


// В JavaScript створіть новий екземпляр IntersectionObserver, щоб стежити за видимістю зображень. Встановіть порігове значення threshold на 0.5, щоб зображення з'являлися, коли вони перетинають половину видимої зони.
// Отримати всі елементи зображень зі сторінки за допомогою document.querySelectorAll(), які містять атрибут data-src.
// Пройдіться по списку зображень і для кожного з них додайте його до спостереження IntersectionObserver з використанням методу observe().
// Коли зображення стає видимим, його src атрибут змінюється на data-src із посиланням на фактичне зображення. Після того, як зображення було завантажено, воно більше не входить до спостереження IntersectionObserver, щоб уникнути зайвих операцій.











let options = {
    root: document.querySelector('body'),
    rootMargin: '0px',
    threshold: 0.5,
}

let observer = new IntersectionObserver(entries => {
    entries.forEach(el => {
        if(el.isIntersecting) {
            el.target.classList.add('visible');
        } else {
            el.target.classList.remove('visible');
        }
    })
});

document.querySelectorAll('.lazy-img').forEach(el => {
    observer.observe(el);
});


