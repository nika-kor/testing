

//Завдання: Створення інтернет-магазину
//Опис:
// Вам потрібно створити простий інтерфейс інтернет-магазину, який дозволить:

// Відобразити список товарів на сторінці.
// Додати товари до кошика.
// Відобразити кількість обраних товарів і загальну вартість замовлення у кошику.
// Кроки виконання:
// HTML-розмітка:

// Контейнер для виведення списку товарів.
// Контейнер для відображення кошика.
// Масив товарів: У JavaScript створіть масив об’єктів, де кожен об’єкт представляє товар із наступними полями:

// id (унікальний ідентифікатор товару)
// name (назва товару)
// price (ціна товару)
// image (URL зображення товару, можна використовувати заглушки)
// Функціонал:

// Відрендерити список товарів у контейнері.
// Додати кнопку "Додати в кошик" для кожного товару.
// При натисканні кнопки товар додається до кошика (зберігати у масиві).
// Оновлювати відображення кількості товарів і загальної суми у кошику.






//Приклад масиву товарів:
const products = [
    { id: 1, name: "Ноутбук", price: 25000, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Смартфон", price: 15000, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Навушники", price: 2000, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Навушники", price: 1000, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Навушники", price: 2000, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Навушники", price: 20000, image: "https://via.placeholder.com/100" },
  ];
  
  
  
  const productsList = document.querySelector('.products-list');
  const cart = document.querySelector('.cart');
  
  
  const cartItems = [];
  
  const renderProducts = products.map((product) => `<li id="${product.id}"><img src="${product.image}" alt="${product.name}"><h2>${product.name}</h2><p>${product.price}</p><button class="add-to-cart">Додати в кошик</button></li>`).join('');
  
  
  productsList.insertAdjacentHTML('beforeend', renderProducts);
  
  
  // При натисканні кнопки товар додається до кошика (зберігати у масиві). 
  // Оновлювати відображення кількості товарів і загальної суми у кошику.
  
  
  const addToCart = document.querySelectorAll('.add-to-cart');
  addToCart.forEach((button) => {
    button.addEventListener('click', () => {
      
      const productId = Number(button.closest('li').id);
      const product = products.find((product) => product.id === productId);
  
      cartItems.push(product);
      cart.innerHTML = '';
      cartItems.forEach((item) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><h2>${item.name}</h2><p>${item.price}</p>`;
        cart.appendChild(cartItem);
      });
  
      const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
      const totalItems = cartItems.length;
      const cartTotal = document.createElement('li');
      cartTotal.innerHTML = `<h2>Загальна сума: ${totalPrice}</h2><p>Кількість товарів: ${totalItems}</p>`;
      cart.appendChild(cartTotal);
    });
  })
  
  
  
  
  
  
  
  
  
  
  
  
  