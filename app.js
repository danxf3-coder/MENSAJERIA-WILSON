const WHATSAPP_NUMBER = "5491167016489";

const PURCHASE_LABEL = "Precio";

const categories = [
  { id: "all", name: "Todas", group: "Catalogo" },
  { id: "ofertas-productos", name: "Ofertas", group: "" },
  { id: "machetes", name: "Machetes", group: "Hogar y Jardín" },
  { id: "tijera-podar", name: "Tijeras Tramontina", group: "Hogar y Jardín" },
  { id: "bieldo", name: "Bieldo - Jardineria", group: "Hogar y Jardín" },
  { id: "Pico punta-cabo oval", name: "Pico punta pala cabo", group: "Hogar y Jardín" },
  { id: "tijeras-cerco", name: "Tijera para cercos", group: "Hogar y Jardín" },
  { id: "Palas", name: "Palas Tramontina-Jardín", group: "Hogar y Jardín" },
  { id: "", name: "", group: "Hogar y Jardín" },
  { id: "", name: "", group: "Hogar y Jardín" },
  { id: "cera depilar", name: "Ceras y Accesorios", group: "Belleza y Estética" },
  { id: "peluqueria", name: "Cuidado de Cabello", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
  { id: "", name: "", group: "Belleza y Estética" },
];

const products = [
  {
    id: 18,
    name: "",
    code: "3124",
    category: "dama-rinoneras",
    description: "Riñoneras Dama con diseño elegante y múltiples colores disponibles.",
    colors: ["Dorado", "Rosa", "Blanco", "Celeste", "Negro", "Rosa brillante"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Riñonera Dama- cod 203.jpeg",
    image: "linear-gradient(135deg, #ecb3c8, #f7e9e2)",
    price: 6500,
    sold: 10,
  },
  {
    id: 19,
    name: "Combo Profesional Masoterapia",
    code: "3125",
    category: "peluqueria",
    description: "",
    colors: [],
    stock: "Últimos 3",
    imageUrl: "img/Combo.jpeg",
    image: "linear-gradient(135deg, #2a2a2a, #5a6b68)",
    price: 75000,
    sold: 8,
  },
  {
    id: 80,
    name: "Fundidor de Cera",
    code: "3126",
    category: "peluqueria",
    description: "1kg Depily Filtro Metal + Cera + Espatulas",
    colors: [],
    stock: "Últimas 3",
    imageUrl: "img/Fundidor cera.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 65900,
    sold: 5,
  },
  {
    id: 81 ,
    name: "Maquina Trimmer Kemei",
    code: "236",
    category: "peluqueria",
    description: "KM-5027 con pantalla Led",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Maquina1.jpeg",
    image: "linear-gradient(135deg, #7fb8dc, #1f2937)",
    price: 61750,
    sold: 6,
  },
  {
    id: 82,
    name: "Máquina Kemei",
    code: "158",
    category: "peluqueria",
    description: "KM-2373 8800rpm",
    colors: [],
    stock: "6",
    imageUrl: "img/Maquina2.jpeg",
    image: "linear-gradient(135deg, #2a2a2a, #b9a99a)",
    price: 159000,
    sold: 5,
  },
  {
    id: 83,
    name: "Máquina de cortar pelo profesional",
    code: "159",
    category: "peluqueria",
    description: "Marca Kemei km-1986",
    colors: [],
    stock: "3",
    imageUrl: "img/Maquina3.jpeg",
    image: "linear-gradient(135deg, #2a2a2a, #b9a99a)",
    price: 84550,
    sold: 5,
  },
 {
    id: 84,
    name: "Plancha para cabello",
    code: "160",
    category: "peluqueria",
    description: "Mega Sonic Vibra 260°",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Plancha.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 152000,
    sold: 0,
  },
  {
    id: 85,
    name: "Secador de Pelo Profesional Altro",
    code: "161",
    category: "peluqueria",
    description: "2800 Exclusive Teknikpro",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Secador pelo.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 61750,
    sold: 0,
  },
  {
    id: 86,
    name: "Serum Karseell",
    code: "162",
    category: "peluqueria",
    description: "Maca Essence Reparacion Extrema",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Serum.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 30000,
    sold: 0,
  },
  {
    id: 136,
    name: "Set Peluqueria",
    code: "163",
    category: "peluqueria",
    description: "Plancha Alisadora 4091 + Secador de pelo 2000w Black BabylissPRO",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Set plancha secador.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 329000,
    sold: 0,
  },
  {
    id: 137,
    name: "Karseell Shampoo",
    code: "164",
    category: "peluqueria",
    description: "Maca Essence Reparacion Extrema",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Shampoo.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 35000,
    sold: 0,
  },
  {
    id: 138,
    name: "Karseell Reparación",
    code: "213",
    category: "peluqueria",
    description: "Mascarilla Capilar con Colágeno x500grs",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Karsell.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 30000,
    sold: 0,
  },
   {
    id: 139,
    name: "Tijeron de Podar",
    code: "214",
    category: "tijera-podar",
    description: "Tipo Bypass, de Acero con Mangos Extensibles",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/tijera 5.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 54856,
    sold: 0,
  },
   {
    id: 140,
    name: "Pala cuadrada pequeña",
    code: "215",
    category: "Palas",
    description: "45cm de largo",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/pala 2.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 12864,
    sold: 0,
  },
   {
    id: 141,
    name: "Pala redonda pequeña",
    code: "216",
    category: "Palas",
    description: "45cm de largo",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/pala.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 11906,
    sold: 0,
  },
   {
    id: 142,
    name: "Tijera de podar profesional bypass",
    code: "217",
    category: "tijera-podar",
    description: "con blister",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/tijera6.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 20393,
    sold: 0,
  },
   {
    id: 143,
    name: "Tijeras para cercas",
    code: "218",
    category: "tijera-podar",
    description: "Lámina dentada",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/tijera 4.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 15360,
    sold: 0,
  },
   {
    id: 144,
    name: "Recogedor de Frutas Tramontina",
    code: "219",
    category: "",
    description: "Con cabo de madera 145cm",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Recogedor-fruta.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 23251,
    sold: 0,
  },
   {
    id: 145,
    name: "Tijera para podar v2",
    code: "220",
    category: "tijera-podar",
    description: "Mango metálico 60cm. con blister",
    colors: ["Negro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Tijera 2.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 29604,
    sold: 0,
  },
   {
    id: 146,
    name: "Tijera para podar",
    code: "221",
    category: "tijera-podar",
    description: "Lámina metálica- cabo de plástico",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Tijera.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 8836,
    sold: 0,
  },
   {
    id: 147,
    name: "Machete ancho Tramontina",
    code: "222",
    category: "machetes",
    description: "22 pulgadas mango de propileno",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/machete4.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 13970,
    sold: 0,
  },
   {
    id: 148,
    name: "Machete ancho Tramontina",
    code: "223",
    category: "machetes",
    description: "20 pulgadas, mango de propileno",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Machete 2.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 13250,
    sold: 0,
  },
   {
    id: 149,
    name: "Machete angosto Tramontina V2",
    code: "224",
    category: "machetes",
    description: "20 pulgadas, mango propileno",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/machete 3.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 13000,
    sold: 0,
  },
   {
    id: 150,
    name: "Machete angosto Tramontina",
    code: "225",
    category: "machetes",
    description: "18 pulgadas, mango propileno",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/cod1.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 12000,
    sold: 0,
  },
   {
    id: 151,
    name: "Machete ancho Tramontina",
    code: "226",
    category: "machetes",
    description: "24 pulgadas, mango de propileno",
    colors: [],
    stock: "Consultar disponibilidad",
    imageUrl: "img/machete5.jpeg",
    image: "linear-gradient(135deg, #f0f6fb, #dbeef8)",
    price: 14657,
    sold: 0,
  },
];

let state = {
  category: "all",
  search: "",
  sort: "recent",
  cart: [],
};

const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

const els = {
  nav: document.querySelector(".main-nav"),
  menuToggle: document.querySelector(".menu-toggle"),
  categoryTabs: document.querySelector("[data-category-tabs]"),
  categoryFilter: document.querySelector("#categoryFilter"),
  searchInput: document.querySelector("#searchInput"),
  sortFilter: document.querySelector("#sortFilter"),
  productGrid: document.querySelector("[data-product-grid]"),
  productCount: document.querySelector("[data-product-count]"),
  resetFilters: document.querySelector("[data-reset-filters]"),
  cartDrawer: document.querySelector("[data-cart-drawer]"),
  cartItems: document.querySelector("[data-cart-items]"),
  cartTotal: document.querySelector("[data-cart-total]"),
  cartCounts: document.querySelectorAll("[data-cart-count]"),
  detailModal: document.querySelector("[data-detail-modal]"),
  detail: document.querySelector(".product-detail"),
  customerName: document.querySelector("#customerName"),
  customerAddress: document.querySelector("#customerAddress"),
  customerPostal: document.querySelector("#customerPostal"),
  customerCity: document.querySelector("#customerCity"),
  customerApartment: document.querySelector("#customerApartment"),
  customerNotes: document.querySelector("#customerNotes"),
};

function getCategory(id) {
  return categories.find((category) => category.id === id) || categories[0];
}

function productPrice(product) {
  return product.price;
}

function hasPrice(product) {
  return Number.isFinite(productPrice(product));
}

function formatProductPrice(product) {
  return hasPrice(product) ? money.format(productPrice(product)) : "Consultar precio";
}

function productSubtotal(product, quantity) {
  return hasPrice(product) ? productPrice(product) * quantity : 0;
}

function productAlt(product) {
  return `${product.name} R&B mayorista`;
}

function renderProductImage(product, label) {
  if (product.imageUrl) {
    return `<img src="${product.imageUrl}" alt="${productAlt(product)}" loading="lazy" />`;
  }

  return `<span>${label}</span>`;
}

function renderDetailSpecs(product, category) {
  const specs = [
    ["Categoria", category.name],
    ["Material", product.material],
    ["Medidas", product.measures],
    ["Stock", product.stock],
    ["Colores", product.colors.join(", ")],
    ["Precio mayorista", formatProductPrice(product)],
  ];

  return specs
    .filter(([, value]) => value)
    .map(([label, value]) => `<div><strong>${label}</strong><br />${value}</div>`)
    .join("");
}

function renderCategories() {
  els.categoryTabs.innerHTML = categories
    .map(
      (category) => `
      <button class="category-card ${state.category === category.id ? "active" : ""}" type="button" data-category="${category.id}">
        <strong>${category.name}</strong>
        <span>${category.group}</span>
      </button>
    `,
    )
    .join("");

  els.categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category.id}">${category.group} - ${category.name}</option>`)
    .join("");
  els.categoryFilter.value = state.category;
}

function filteredProducts() {
  const query = state.search.trim().toLowerCase();
  return products
    .filter((product) => state.category === "all" || product.category === state.category)
    .filter((product) => {
      if (!query) return true;
      return [product.name, product.code, getCategory(product.category).name, product.description]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => {
      if (state.sort === "low") return (hasPrice(a) ? productPrice(a) : Infinity) - (hasPrice(b) ? productPrice(b) : Infinity);
      if (state.sort === "high") return (hasPrice(b) ? productPrice(b) : -1) - (hasPrice(a) ? productPrice(a) : -1);
      if (state.sort === "popular") return b.sold - a.sold;
      return b.id - a.id;
    });
}

function renderProducts() {
  const items = filteredProducts();
  els.productCount.textContent = `${items.length} producto${items.length === 1 ? "" : "s"} encontrados`;
  els.productGrid.innerHTML = items.length
    ? items.map(renderProductCard).join("")
    : `<div class="empty-state">No encontramos productos con esos filtros.</div>`;
}

function renderProductCard(product) {
  const category = getCategory(product.category);
  return `
    <article class="product-card">
      <button class="product-image${product.id === 13 ? " product-image--large" : ""}" type="button" data-detail="${product.id}" style="background:${product.image}" aria-label="Ver detalle de ${productAlt(product)}">
        ${renderProductImage(product, category.group)}
      </button>
      <div class="product-body">
        <div>
          <div class="tag-row">
            <span class="tag">${category.group}</span>
            <span class="tag">${product.code}</span>
          </div>
          <h3>${product.name}</h3>
          <p>${category.name}. ${product.description}</p>
        </div>
        <div class="price-list" aria-label="Precio mayorista">
          <span>${PURCHASE_LABEL}<strong>${formatProductPrice(product)}</strong></span>
          <span>Stock<strong>${product.stock}</strong></span>
        </div>
       <div class="card-controls">

  <div>
    <strong>Color</strong>

    <div class="color-selector">
      ${product.colors.map((color, index) => `
        <button
          type="button"
          class="color-dot ${index === 0 ? "active" : ""}"
          data-color="${color}"
          title="${color}">
        </button>
      `).join("")}
    </div>
  </div>

  <label>
    Cant.
    <input type="number" min="1" value="1" data-detail-qty />
  </label>
</div>
<div class="card-actions">
  <button
    class="btn btn-primary"
    type="button"
    data-add="${product.id}">
    Agregar
  </button>

  <button
    class="btn btn-secondary"
    type="button"
    data-consult="${product.id}">
    Consultar
  </button>
</div>
    </article>
  `;
}
function addToCart(productId, quantity, color = "") {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const key = `${productId}-${color}`;

  const existing = state.cart.find((item) => item.key === key);

  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      key,
      productId,
      quantity,
      color
    });
  }

  renderCart();
  openCart();
}
function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  els.cartCounts.forEach((countEl) => {
    countEl.textContent = count;
  });

  if (!state.cart.length) {
    els.cartItems.innerHTML = `<div class="empty-state">Todavia no agregaste productos.</div>`;
    els.cartTotal.textContent = money.format(0);
    return;
  }

  els.cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      const subtotal = productSubtotal(product, item.quantity);
      return `
        <article class="cart-item">
          <div class="cart-thumb" style="background:${product.image}" aria-hidden="true"></div>
          <div>
          <div>
  <h3>${product.name}</h3>
  <p><strong>Color:</strong> ${item.color || "No seleccionado"}</p>
  <p>${product.code} · ${PURCHASE_LABEL} · ${formatProductPrice(product)}</p>
            <div class="quantity-row">
              <button class="qty-btn" type="button" data-dec="${item.key}" aria-label="Restar cantidad">−</button>
              <strong>${item.quantity}</strong>
              <button class="qty-btn" type="button" data-inc="${item.key}" aria-label="Sumar cantidad">+</button>
              <span>${hasPrice(product) ? money.format(subtotal) : "Consultar"}</span>
              <button class="remove-btn" type="button" data-remove="${item.key}">Eliminar</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  els.cartTotal.textContent = money.format(cartTotal());
}

function cartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return sum + productSubtotal(product, item.quantity);
  }, 0);
}

function openCart() {
  els.cartDrawer.classList.add("open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  els.cartDrawer.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
}

function openDetail(productId) {
  const product = products.find((item) => item.id === productId);
  const category = getCategory(product.category);
  els.detail.innerHTML = `
    <button class="icon-button" type="button" data-close-detail aria-label="Cerrar detalle">×</button>
    <div class="detail-gallery${product.id === 13 ? " detail-gallery--large" : ""}" style="background:${product.image}" role="img" aria-label="${productAlt(product)}">
      ${product.imageUrl ? `<img src="${product.imageUrl}" alt="${productAlt(product)}" />` : `<span>${product.name}</span>`}
    </div>
    <div>
      <p class="eyebrow">${category.group} · ${product.code}</p>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
    </div>
    <div class="detail-grid">${renderDetailSpecs(product, category)}</div>
    <div class="card-controls">
      <label>
        Cant.
        <input type="number" min="1" value="1" data-detail-qty />
      </label>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary" type="button" data-detail-add="${product.id}">Agregar al carrito</button>
      <button class="btn btn-whatsapp" type="button" data-consult="${product.id}">Consultar por WhatsApp</button>
    </div>
  `;
  els.detailModal.classList.add("open");
  els.detailModal.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  els.detailModal.classList.remove("open");
  els.detailModal.setAttribute("aria-hidden", "true");
}

function buildOrderMessage() {
  const customer = els.customerName.value.trim() || "No indicado";
  const address = els.customerAddress.value.trim() || "No indicada";
  const postal = els.customerPostal.value.trim() || "No indicado";
  const city = els.customerCity.value.trim() || "No indicada";
  const apartment = els.customerApartment.value.trim() || "Sin especificar";
  const notes = els.customerNotes.value.trim() || "Ninguna";

  const lines = state.cart.map((item) => {
    const product = products.find((entry) => entry.id === item.productId);

    const subtotal = productSubtotal(product, item.quantity);

    return `• ${product.name}
  Color: ${item.color}
  Cantidad: ${item.quantity}
  Precio: ${formatProductPrice(product)}
  Subtotal: ${money.format(subtotal)}`;
  });

  return `🛒 *NUEVO PEDIDO*

${lines.join("\n\n")}

💰 TOTAL: ${money.format(cartTotal())}

👤 Cliente: ${customer}

📍 Dirección: ${address}

🏙️ Localidad: ${city}

📮 Código Postal: ${postal}

🏢 Piso/Depto: ${apartment}

📝 Observaciones:
${notes}`;
}

function whatsappUrl(message = "Hola MENSAJERIA WILSON, quiero hacer una consulta.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappUrl();
  });
}

function consultProduct(productId) {
  const product = products.find((item) => item.id === productId);
  const message = `Hola MENSAJERIA WILSON, quiero consultar por:

Producto: ${product.name}
Codigo: ${product.code}
Categoria: ${getCategory(product.category).name}
Quedo atento/a para confirmar disponibilidad y precio.`;
  window.open(whatsappUrl(message), "_blank", "noopener");
}

document.addEventListener("click", (event) => {
  const category = event.target.closest("[data-category]");
  if (category) {
    state.category = category.dataset.category;
    renderCategories();
    renderProducts();
    document.querySelector("#productos").scrollIntoView({ behavior: "smooth" });
  }

  const detail = event.target.closest("[data-detail]");
  if (detail) openDetail(Number(detail.dataset.detail));
 const add = event.target.closest("[data-add]");

if (add) {
  const card = add.closest(".product-card");

  const selectedColor =
    card.querySelector(".color-dot.active")?.dataset.color || "";

  const quantity = Math.max(
    1,
    Number(card.querySelector('input[type="number"]').value || 1)
  );

  addToCart(
    Number(add.dataset.add),
    quantity,
    selectedColor
  );
}

 const detailAdd = event.target.closest("[data-detail-add]");

if (detailAdd) {

  const selectedColor =
    els.detailModal.querySelector(".color-dot.active")?.dataset.color || "";

  addToCart(
    Number(detailAdd.dataset.detailAdd),
    Math.max(
      1,
      Number(document.querySelector("[data-detail-qty]").value || 1)
    ),
    selectedColor
  );

  closeDetail();
}

  const consult = event.target.closest("[data-consult]");
  if (consult) consultProduct(Number(consult.dataset.consult));

  if (event.target.closest("[data-open-cart]")) openCart();
  if (event.target.closest("[data-close-cart]")) closeCart();
  if (event.target.closest("[data-close-detail]")) closeDetail();

  const inc = event.target.closest("[data-inc]");
  if (inc) {
    const item = state.cart.find((entry) => entry.key === inc.dataset.inc);
    item.quantity += 1;
    renderCart();
  }

  const dec = event.target.closest("[data-dec]");
  if (dec) {
    const item = state.cart.find((entry) => entry.key === dec.dataset.dec);
    item.quantity -= 1;
    if (item.quantity < 1) state.cart = state.cart.filter((entry) => entry.key !== dec.dataset.dec);
    renderCart();
  }

  const remove = event.target.closest("[data-remove]");
  if (remove) {
    state.cart = state.cart.filter((entry) => entry.key !== remove.dataset.remove);
    renderCart();
  }

  if (event.target.closest("[data-send-order]")) {
    if (!state.cart.length) {
      alert("Agrega productos al carrito antes de enviar el pedido.");
      return;
    }
    window.open(whatsappUrl(buildOrderMessage()), "_blank", "noopener");
  }

  if (event.target.closest("[data-reset-filters]")) {
    state = { ...state, category: "all", search: "", sort: "recent" };
    els.searchInput.value = "";
    els.sortFilter.value = state.sort;
    renderCategories();
    renderProducts();
  }
  const colorDot = event.target.closest(".color-dot");

if (colorDot) {
  colorDot.parentElement
    .querySelectorAll(".color-dot")
    .forEach(dot => dot.classList.remove("active"));

  colorDot.classList.add("active");
}
});

els.menuToggle.addEventListener("click", () => {
  const isOpen = els.nav.classList.toggle("open");
  els.menuToggle.setAttribute("aria-expanded", String(isOpen));
});

els.nav.addEventListener("click", () => {
  els.nav.classList.remove("open");
  els.menuToggle.setAttribute("aria-expanded", "false");
});

els.categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderCategories();
  renderProducts();
});

els.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

els.sortFilter.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

updateWhatsappLinks();
renderCategories();
renderProducts();
renderCart();
const checkoutButton = document.getElementById("showCheckout");
const checkoutForm = document.getElementById("checkoutForm");

checkoutButton.addEventListener("click", () => {

  checkoutForm.classList.toggle("open");

  if (checkoutForm.classList.contains("open")) {
    checkoutButton.textContent = "Ocultar datos de envío";
  } else {
    checkoutButton.textContent = "Continuar con el envío";
  }

});