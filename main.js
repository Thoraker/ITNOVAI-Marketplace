const API_URL = import.meta.env.VITE_API_URL;

async function getProducts() {
  try {
    const response = await fetch(API_URL + "/api/product/");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

async function getAllProducts() {
  try {
    const response = await fetch(API_URL + "/api/product/?limit=100");
    const products = await response.json();
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

// Función para renderizar los productos de las categorías
async function renderProductsByCategory() {
  const containerProductByCategory =
    document.querySelector(`.producto-container`);
  const categories = await getCategories();
  categories.products.forEach((product) => {
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
    containerProductByCategory.appendChild(productDiv);
  });
}

// Llamar a la función para renderizar las categorías
async function renderCategories() {
  const containerCategory = document.querySelector(".category-container");
  const categories = await getCategories();
  categories.results.forEach(async (category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("accordion-item");
    categoryDiv.innerHTML = `
    <h2 class="accordion-header">
    <button
    class="accordion-button collapsed"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#${category.id}"
    aria-expanded="false"
    aria-controls="${category.id}"
    >
    ${category.name}
    </button>
    </h2>
    <div
    id="${category.id}"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
    >
    <div class="accordion-body">
    <div class="row row-cols-1 row-cols-md-3 g-4 product-container${category.id}">
    
    </div>
    </div>
    
    </div>
    `;

    containerCategory.appendChild(categoryDiv);

    // Llamar a la función para renderizar los productos de la categoría
    const containerProductByCategory = document.querySelector(
      `.product-container${category.id}`
    );

    const products = await getAllProducts();
    products.results.forEach((product) => {
      if (product.category === category.id) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("col");
        productDiv.innerHTML = `
            <div class="card h-100">
                <img src="${product.url_image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Precio: $${product.price}</p>
                    <p class="card-text">Descuento: ${product.discount}</p>
                    <button class="btn btn-primary"> agregar al carrito</button>
                </div>
            </div>
        `;
        containerProductByCategory.appendChild(productDiv);
      }
    });
  });
}

// Llamar a la función para renderizar los productos
renderProducts();

// Llamar a la función para renderizar las categorías
renderCategories();

// Evento click en el botón "Ver Productos"
const verProductosBtn = document.getElementById("verProductos");
verProductosBtn.addEventListener("click", () => {
  const productsSection = document.querySelector(".productos");
  productsSection.scrollIntoView({ behavior: "smooth" });
});
