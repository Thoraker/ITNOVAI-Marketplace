// Datos de ejemplo de productos
const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 19.99,
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 24.99,
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 14.99,
    imagen: "https://via.placeholder.com/150",
  },
  // Agrega más productos aquí
];

// Función para renderizar los productos
function renderizarProductos() {
  const productoContainer = document.querySelector(".producto-container");
  productos.forEach((producto) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("col");
    productoDiv.innerHTML = `
            <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <button class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        `;
    productoContainer.appendChild(productoDiv);
  });
}

// Llamar a la función para renderizar los productos
renderizarProductos();

// Evento click en el botón "Ver Productos"
const verProductosBtn = document.getElementById("verProductos");
verProductosBtn.addEventListener("click", () => {
  const productosSeccion = document.querySelector(".productos");
  productosSeccion.scrollIntoView({ behavior: "smooth" });
});
