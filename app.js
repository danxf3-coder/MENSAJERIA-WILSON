const WHATSAPP_NUMBER = "5491132797598";

const PURCHASE_LABEL = "Mayorista";

const categories = [
  { id: "all", name: "Todas", group: "Catalogo" },
  { id: "caballero-billeteras", name: "Billeteras", group: "Caballero" },
  { id: "caballero-rinoneras", name: "Rinoneras", group: "Caballero" },
  { id: "caballero-bandoleras", name: "Bandoleras", group: "Caballero" },
  { id: "caballero-pecheras", name: "Pecheras", group: "Caballero" },
  { id: "caballero-camperas", name: "Camperas importadas", group: "Caballero" },
  { id: "caballero-chalecos", name: "Chalecos importados", group: "Caballero" },
  { id: "caballero-afa", name: "Camisetas AFA", group: "Caballero" },
  { id: "dama-billeteras-grandes", name: "Billeteras grandes", group: "Dama" },
  { id: "dama-billeteras-medianas", name: "Billeteras medianas", group: "Dama" },
  { id: "dama-rinoneras", name: "Rinoneras", group: "Dama" },
  { id: "dama-pecheras", name: "Pecheras", group: "Dama" },
  { id: "dama-neceser", name: "Neceser", group: "Dama" },
  { id: "dama-tote", name: "Tote Bag Grande", group: "Dama" },
  { id: "dama-tarjeteros", name: "Tarjeteros", group: "Dama" },
  { id: "dama-portacelulares", name: "Portacelulares", group: "Dama" },
  { id: "dama-mini-tote", name: "Mini Tote", group: "Dama" },
  { id: "dama-mini-bags", name: "Mini Bags", group: "Dama" },
  { id: "dama-bandoleras", name: "Bandoleras", group: "Dama" },
];

const products = [
  {
    id: 13,
    name: "Neceser corazon 2623",
    code: "2623",
    category: "dama-neceser",
    description: "Neceser con aplique de corazon, brillos y pompón.",
    colors: ["Rosa", "Negro", "Celeste", "Verde claro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/neceser-2623.jpg",
    image: "linear-gradient(135deg, #d6a6a6, #8fd4c9)",
    price: 4500,
    sold: 200,
  },
  {
    id: 14,
    name: "Billetera caballero 0473",
    code: "0473",
    category: "caballero-billeteras",
    description: "Billetera de caballero. Consultar colores disponibles.",
    colors: ["Consultar"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/billetera-caballero-0473.jpg",
    image: "linear-gradient(135deg, #2d211c, #936f56)",
    price: 5000,
    sold: 199,
  },
  {
    id: 1,
    name: "Billetera Grande Roma",
    code: "DG-001",
    category: "dama-billeteras-grandes",
    description: "Billetera amplia con cierres reforzados y divisiones internas.",
    material: "Cuero sintetico premium",
    measures: "19 x 10 x 3 cm",
    colors: ["Negro", "Nude", "Rosa viejo"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #7b5546, #d8b7a6)",
    price: 9800,
    sold: 96,
  },
  {
    id: 2,
    name: "Bandolera Urban Dama",
    code: "DB-014",
    category: "dama-bandoleras",
    description: "Bandolera compacta para uso diario con correa regulable.",
    material: "Eco cuero",
    measures: "22 x 16 x 8 cm",
    colors: ["Negro", "Beige", "Suela"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #202020, #b88973)",
    price: 13900,
    sold: 122,
  },
  {
    id: 3,
    name: "Rinonera Sport Caballero",
    code: "CR-022",
    category: "caballero-rinoneras",
    description: "Rinonera resistente con bolsillos frontales y correa ajustable.",
    material: "Nylon importado",
    measures: "31 x 14 x 8 cm",
    colors: ["Negro", "Gris", "Azul"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #30343b, #818891)",
    price: 10900,
    sold: 141,
  },
  {
    id: 4,
    name: "Campera Importada Street",
    code: "CC-107",
    category: "caballero-camperas",
    description: "Campera urbana importada, ideal para temporada y reventa.",
    material: "Poliester con interior liviano",
    measures: "Talles M al XXL",
    colors: ["Negro", "Verde", "Azul marino"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #151515, #6f6a66)",
    price: 39800,
    sold: 83,
  },
  {
    id: 5,
    name: "Tote Bag Grande Paris",
    code: "DT-031",
    category: "dama-tote",
    description: "Bolso amplio, liviano y practico para todos los dias.",
    material: "Eco cuero texturado",
    measures: "38 x 31 x 12 cm",
    colors: ["Negro", "Nude", "Marron"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #c6a76a, #efe1d3)",
    price: 18900,
    sold: 77,
  },
  {
    id: 6,
    name: "Billetera Caballero Clasica",
    code: "CB-006",
    category: "caballero-billeteras",
    description: "Modelo clasico con tarjetero y billetero interno.",
    material: "Cuero sintetico",
    measures: "12 x 9 x 2 cm",
    colors: ["Negro", "Marron"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #2d211c, #936f56)",
    price: 6900,
    sold: 155,
  },
  {
    id: 7,
    name: "Portacelular Dama Soft",
    code: "DP-018",
    category: "dama-portacelulares",
    description: "Portacelular con bolsillo externo y tira larga.",
    material: "Eco cuero soft",
    measures: "19 x 11 x 4 cm",
    colors: ["Negro", "Rosa viejo", "Beige"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #d6a6a6, #7b5546)",
    price: 9200,
    sold: 112,
  },
  {
    id: 8,
    name: "Pecherita Cross Caballero",
    code: "CP-044",
    category: "caballero-pecheras",
    description: "Pechera practica con cierre seguro y compartimentos.",
    material: "Nylon reforzado",
    measures: "28 x 18 x 7 cm",
    colors: ["Negro", "Gris"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #111111, #8a8d91)",
    price: 12900,
    sold: 99,
  },
  {
    id: 9,
    name: "Mini Bag Gala",
    code: "DM-041",
    category: "dama-mini-bags",
    description: "Mini bag de salida con textura elegante y cierre metalico.",
    material: "Eco cuero",
    measures: "17 x 12 x 6 cm",
    colors: ["Negro", "Dorado", "Nude"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #202020, #c6a76a)",
    price: 11900,
    sold: 88,
  },
  {
    id: 10,
    name: "Camiseta AFA Importada",
    code: "CA-010",
    category: "caballero-afa",
    description: "Camiseta importada para reventa, consultar talles disponibles.",
    material: "Tela deportiva",
    measures: "Talles S al XXL",
    colors: ["Titular", "Alternativa"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #75b7e8, #ffffff)",
    price: 19900,
    sold: 134,
  },
  {
    id: 11,
    name: "Neceser Travel Dama",
    code: "DN-012",
    category: "dama-neceser",
    description: "Neceser organizador con buena capacidad y facil limpieza.",
    material: "PVC y tela impermeable",
    measures: "24 x 16 x 10 cm",
    colors: ["Transparente", "Nude", "Negro"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #efe1d3, #9a765f)",
    price: 7900,
    sold: 71,
  },
  {
    id: 12,
    name: "Chaleco Importado Basic",
    code: "CH-025",
    category: "caballero-chalecos",
    description: "Chaleco liviano importado con cierre frontal y bolsillos.",
    material: "Poliester",
    measures: "Talles M al XXL",
    colors: ["Negro", "Gris", "Azul"],
    stock: "Consultar disponibilidad",
    image: "linear-gradient(135deg, #2f3640, #aeb4bb)",
    price: 31800,
    sold: 64,
  },
  {
    id: 15,
    name: "Billetera CARP",
    code: "Rp12",
    category: "caballero-billeteras",
    description: "Billetera CARP con diseño elegante y espacio para tarjetas.",
    colors: ["Negro", "Marron"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera%20CARP-Cod.Rp12%20$6500%20.jpeg",
    image: "linear-gradient(135deg, #2d211c, #7b5546)",
    price: 6500,
    sold: 30,
  },
  {
    id: 16,
    name: "Billetera CABJ",
    code: "Bj10",
    category: "caballero-billeteras",
    description: "Billetera CABJ con terminaciones reforzadas y estilo premium.",
    colors: ["Negro", "Marron"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera%20CABJ-%20Cod.Bj10-%20$6500.jpeg",
    image: "linear-gradient(135deg, #2d211c, #4b5a66)",
    price: 6500,
    sold: 28,
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
      <button class="product-image" type="button" data-detail="${product.id}" style="background:${product.image}" aria-label="Ver detalle de ${productAlt(product)}">
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
          <label>
            Cant.
            <input type="number" min="1" value="1" data-card-qty="${product.id}" />
          </label>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" type="button" data-add="${product.id}">Agregar</button>
          <button class="btn btn-secondary" type="button" data-consult="${product.id}">Consultar</button>
        </div>
      </div>
    </article>
  `;
}

function addToCart(productId, quantity) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const key = String(productId);
  const existing = state.cart.find((item) => item.key === key);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ key, productId, quantity });
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
            <h3>${product.name}</h3>
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
    <div class="detail-gallery" style="background:${product.image}" role="img" aria-label="${productAlt(product)}">
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
  const notes = els.customerNotes.value.trim() || "Sin aclaraciones";
  const lines = state.cart.map((item, index) => {
    const product = products.find((entry) => entry.id === item.productId);
    const unit = formatProductPrice(product);
    const subtotal = productSubtotal(product, item.quantity);
    return `${index + 1}. Producto: ${product.name}
   Codigo: ${product.code}
   Categoria: ${getCategory(product.category).name}
   Compra: ${PURCHASE_LABEL}
   Cantidad: ${item.quantity}
   Precio unitario: ${unit}
   Subtotal: ${hasPrice(product) ? money.format(subtotal) : "Consultar"}`;
  });

  return `Hola R&B mayorista, quiero hacer una consulta/pedido:

Cliente:
${customer}

Productos:

${lines.join("\n\n")}

Total estimado: ${money.format(cartTotal())}

Aclaraciones:
${notes}

Quedo atento/a para confirmar disponibilidad y formas de entrega.`;
}

function whatsappUrl(message = "Hola R&B mayorista, quiero hacer una consulta.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappUrl();
  });
}

function consultProduct(productId) {
  const product = products.find((item) => item.id === productId);
  const message = `Hola R&B mayorista, quiero consultar por:

Producto: ${product.name}
Codigo: ${product.code}
Categoria: ${getCategory(product.category).name}

Quedo atento/a para confirmar disponibilidad, colores y precio.`;
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
    const id = Number(add.dataset.add);
    const quantity = Math.max(1, Number(document.querySelector(`[data-card-qty="${id}"]`).value || 1));
    addToCart(id, quantity);
  }

  const detailAdd = event.target.closest("[data-detail-add]");
  if (detailAdd) {
    addToCart(
      Number(detailAdd.dataset.detailAdd),
      Math.max(1, Number(document.querySelector("[data-detail-qty]").value || 1)),
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
