// Start: Product Data
const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "Smartphone", category: "Electronics", price: 499 },
  { name: "T-shirt", category: "Clothing", price: 19 },
  { name: "Jeans", category: "Clothing", price: 39 },
  { name: "Headphones", category: "Electronics", price: 89 },
  { name: "Smartwatch", category: "Electronics", price: 199 },
];
// End: Product Data

// Start: Function to Display Products
function displayProducts(filteredProducts) {
  const displayArea = document.getElementById("product-display-area");
  displayArea.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.innerHTML = `
            <h2>${product.name}</h2> <!-- Product name -->
            <p>Category: ${product.category}</p> <!-- Product category -->
            <p>Price: $${product.price}</p> <!-- Product price -->
        `;
    displayArea.appendChild(productDiv);
  });
}
// End: Function to Display Products

// Start: Initial Display of Products
displayProducts(products);
// End: Initial Display of Products

// Start: Event Listeners for Filter Buttons
const filterButtons = document.querySelectorAll(".filter-button");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    const filteredProducts =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);
    displayProducts(filteredProducts);
  });
});
// End: Event Listeners for Filter Buttons
