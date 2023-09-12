// script.js

const productList = document.getElementById("product-list");
const sortSelect = document.getElementById("sort");

const products = [
    { name: "Product 1", price: 50, imageUrl: "product1.jpg" },
    { name: "Product 2", price: 30, imageUrl: "product2.jpg" },
    { name: "Product 3", price: 80, imageUrl: "product3.jpg" },
    // Add more products here
];

function renderProducts(sortedProducts) {
    productList.innerHTML = "";
    sortedProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

function sortProducts(sortBy) {
    if (sortBy === "lowToHigh") {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        renderProducts(sortedProducts);
    } else if (sortBy === "highToLow") {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        renderProducts(sortedProducts);
    }
}

sortSelect.addEventListener("change", () => {
    const selectedSort = sortSelect.value;
    sortProducts(selectedSort);
});

// Initial load
sortProducts(sortSelect.value);
