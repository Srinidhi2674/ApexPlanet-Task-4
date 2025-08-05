const products = [
  { name: "Smartphone", category: "Electronics", price: 19999, image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202506/13/jE39gYUzawQvboWs.png" },
  { name: "T-Shirt", category: "Clothing", price: 499, image: "https://thebanyantee.com/cdn/shop/files/Baby-Pink-T-shirt_599c6286-77e0-45aa-9ea3-ab92f4e2bea1.jpg?v=1721381182" },
  { name: "Laptop", category: "Electronics", price: 55999, image: "https://techterms.com/img/xl/laptop_586.png" },
{ name: "Jeans", category: "Clothing", price: 1299, image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/32140129/2025/2/5/f6e6ea93-3158-4779-8e73-99811b2365201738734096205-Mens-568-Loose-Fit-Blue-Cargo-Jeans-7081738734095597-1.jpg" },

  { name: "Headphones", category: "Electronics", price: 1499, image: "https://cdn.shopify.com/s/files/1/1603/9553/files/Artboard_1_b6961e39-58ba-4af3-87e1-cc308fe6bf78.jpg?v=1722936558" },
];

const categoryFilter = document.getElementById("categoryFilter");
const sortBy = document.getElementById("sortBy");
const productList = document.getElementById("productList");

function renderProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <p>${product.category}</p>
    `;
    productList.appendChild(card);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  const selectedCategory = categoryFilter.value;
  const sortOption = sortBy.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (sortOption === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "price") {
    filtered.sort((a, b) => a.price - b.price);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortBy.addEventListener("change", filterAndSortProducts);

// Initial render
renderProducts(products);