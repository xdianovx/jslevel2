/*
'use strict';

const products = [
    {id: 1, title: 'Ноутбук', price: 12300},
    {id: 1, title: 'Клавиатура', price: 1530},
    {id: 1, title: 'Мышка', price: 990},
    {id: 1, title: 'Наушники', price: 1200},
];

const renderProduct = (title, price, img = 'https://placehold.it/200x150') =>
      `<div class="product-item">
        <img src="${img}" alt="">
        <div class="product-wrap">
            <h2 class="product-title">${title}</h2>
             <p class="product-price">${price}</p>
            <button class="product-button">Добавить в корзину</button>
            </div>
    </div>`
;

//Функция генератор

const renderProducts = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price, item.img)).join('');
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};
renderProducts(products);

console.log(products);
*/

class ProductList {
    constructor(container = '.products') {
            this.container = container;
            this.goods = [];
            this.allProducts = [];
            this._fetchProducts();
            this._render()
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Ноутбук', price: 12300},
            {id: 1, title: 'Клавиатура', price: 1530},
            {id: 1, title: 'Мышка', price: 990},
            {id: 1, title: 'Наушники', price: 1200},
        ]
    }

    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject._render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    _render() {
        return `<div class="product-item">
                    <img src="${this.img}" alt="">
                    <div class="product-wrap">
                        <h2 class="product-title">${this.title}</h2>
                        <p class="product-price">${this.price}</p>
                        <button class="product-button">Добавить в корзину</button>
                    </div>
                </div> `
    }
}

new ProductList();
new ProductList('.products2');

