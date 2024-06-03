const API_URL = import.meta.env.VITE_API_URL;

async function getProducts() {
  try {
    const response = await fetch(API_URL + "/api/product/");
    const products = await response.json();
    console.log(API_URL + "/api/product/");
    return products;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

async function getCategories() {
  try {
    const response = await fetch(API_URL + "/api/category/");
    const categories = await response.json();
    console.log("Categorías:", categories);
    return categories;
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
  }
}
// Función para renderizar los productos
async function renderProducts() {
  const containerProduct = document.querySelector(".producto-container");

  const products = await getProducts();

  products.results.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("col");
    productDiv.innerHTML = `
            <div class="card h-100">
                <img src="${product.url_image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Precio: $${product.price}</p>
                    <p class="card-text">Descuento: ${product.discount}</p>
                    <button class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        `;
    containerProduct.appendChild(productDiv);
  });
}

// Llamar a la función para renderizar los productos
renderProducts();

// Evento click en el botón "Ver Productos"
const verProductosBtn = document.getElementById("verProductos");
verProductosBtn.addEventListener("click", () => {
  const productsSection = document.querySelector(".productos");
  productsSection.scrollIntoView({ behavior: "smooth" });
});
