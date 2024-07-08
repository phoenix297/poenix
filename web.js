// script.js
const productList = document.querySelector('.product-listing');
const products = [
    { id: 1, name: 'Product 1', description: 'Product 1 description', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Product 2 description', image: 'product2.jpg' },
    // Add more products here
];

products.forEach((product) => {
    const productHTML = `
        <li>
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button>Add to Cart</button>
        </li>
    `;
    productList.innerHTML += productHTML;
});