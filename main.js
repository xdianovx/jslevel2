'use strict';

const products = [
    {id: 1, title: 'Ноутбук', price: 12300},
    {id: 1, title: 'Клавиатура', price: 1530},
    {id: 1, title: 'Мышка', price: 990},
    {id: 1, title: 'Наушники', price: 1200},
];

const renderProduct = (title, price, img = 'https://placehold.it/200x150') => {
    return  `<div class="product-item">
        <img src="${img}" alt="">
        <div class="product-wrap">
        <h2 class="product-title">${title}</h2>
        <p class="product-price">${price}</p>
        <button class="product-button">Добавить в корзину</button>
</div>
    </div>`
};

//Функция генератор

const renderProducts = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price, item.img));
    document.querySelector('.products').innerHTML = productList;
};
renderProducts(products);

console.log(products);
