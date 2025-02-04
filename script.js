const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
let cart = [];

// Функция для отображения продуктов
function displayProducts() {
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(li);
    });
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Функция для обновления корзины
function updateCart() {
    cartList.innerHTML = ''; // Очистка корзины
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.title} - $${item.price}
            <button onclick="removeFromCart(${index})">X</button>
        `;
        cartList.appendChild(li);
    });
}

// Функция для удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1); // Удаляем товар из массива по индексу
    updateCart(); // Обновляем корзину
}

// Отображаем продукты при загрузке страницы
document.addEventListener('DOMContentLoaded', displayProducts);
