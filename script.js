const WHATSAPP_PHONE = "51999999999";
const GENERAL_WA_MESSAGE = "Hola Octamon, quisiera consultar sobre sus productos Pokémon.";

const categories = [
  { id: "Cartas", name: "Cartas", icon: "layers" },
  { id: "Sobres y cajas", name: "Sobres y cajas", icon: "package" },
  { id: "Figuras", name: "Figuras", icon: "bot" },
  { id: "Peluches", name: "Peluches", icon: "cat" },
  { id: "Accesorios", name: "Accesorios", icon: "backpack" },
  { id: "Coleccionables", name: "Coleccionables", icon: "sparkles" },
];

const products = [
  { id: 1, name: "Caja Pokémon V", category: "Sobres y cajas", price: 165, availability: "Disponible", emoji: "📦", accent: "#18B8C9" },
  { id: 2, name: "Sobre Espada y Escudo", category: "Sobres y cajas", price: 22, availability: "Disponible", emoji: "✉️", accent: "#52D0B3" },
  { id: 3, name: "Figura Pikachu", category: "Figuras", price: 85, availability: "Disponible", emoji: "⚡", accent: "#FADB55" },
  { id: 4, name: "Peluche Snorlax", category: "Peluches", price: 95, availability: "Pocas unidades", emoji: "🐻", accent: "#52D0B3" },
  { id: 5, name: "Pack de Cartas Pikachu", category: "Cartas", price: 45, availability: "Disponible", emoji: "🎴", accent: "#FADB55" },
  { id: 6, name: "Álbum Pokémon", category: "Accesorios", price: 65, availability: "Disponible", emoji: "📘", accent: "#0A659F" },
  { id: 7, name: "Caja Entrenador Élite", category: "Sobres y cajas", price: 250, availability: "Disponible", emoji: "🎁", accent: "#18B8C9" },
  { id: 8, name: "Figura Charizard", category: "Figuras", price: 120, availability: "Disponible", emoji: "🔥", accent: "#FF6B6B" },
  { id: 9, name: "Peluche Eevee", category: "Peluches", price: 90, availability: "Disponible", emoji: "🦊", accent: "#FADB55" },
  { id: 10, name: "Deck Battle Academy", category: "Cartas", price: 80, availability: "Disponible", emoji: "🃏", accent: "#0A659F" },
  { id: 11, name: "Lata Coleccionable Pikachu", category: "Coleccionables", price: 75, availability: "Pocas unidades", emoji: "🥫", accent: "#FADB55" },
  { id: 12, name: "Mochila Pokémon", category: "Accesorios", price: 110, availability: "Disponible", emoji: "🎒", accent: "#18B8C9" },
];

const iconPaths = {
  "arrow-right": '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
  backpack: '<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><path d="M8 10V6a4 4 0 0 1 8 0v4"></path><path d="M8 14h8"></path><path d="M8 18v-2"></path><path d="M16 18v-2"></path>',
  bot: '<path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path>',
  cat: '<path d="M12 5c.67 0 1.35.09 2 .26L17 3l1 5c.64.82 1 1.84 1 3v2a7 7 0 0 1-14 0v-2c0-1.16.36-2.18 1-3l1-5 3 2.26c.65-.17 1.33-.26 2-.26Z"></path><path d="M9 13h.01"></path><path d="M15 13h.01"></path><path d="M10 17c.67.33 1.33.5 2 .5s1.33-.17 2-.5"></path>',
  facebook: '<path fill="currentColor" stroke="none" d="M15 8h-2c-.55 0-1 .45-1 1v2h3l-.5 3H12v7H9v-7H7v-3h2V9a4 4 0 0 1 4-4h2v3Z"></path>',
  instagram: '<rect width="18" height="18" x="3" y="3" rx="5"></rect><circle cx="12" cy="12" r="3.5"></circle><path d="M17.5 6.5h.01"></path>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"></path><path d="m3 12 9 5 9-5"></path><path d="m3 17 9 5 9-5"></path>',
  menu: '<path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path>',
  "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>',
  package: '<path d="m7.5 4.3 9 5.2"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path>',
  search: '<path d="m21 21-4.35-4.35"></path><circle cx="11" cy="11" r="8"></circle>',
  sparkles: '<path d="M9.9 2.8 8.6 7.1 4.3 8.4l4.3 1.3 1.3 4.3 1.3-4.3 4.3-1.3-4.3-1.3-1.3-4.3Z"></path><path d="M18 13l-.7 2.3L15 16l2.3.7L18 19l.7-2.3L21 16l-2.3-.7L18 13Z"></path>',
  tiktok: '<path fill="currentColor" stroke="none" d="M19.6 6.3a5.3 5.3 0 0 1-3.1-1V15a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.8a2.8 2.8 0 1 0 2 2.7V2h2.7a5.3 5.3 0 0 0 3.1 3.5v.8Z"></path>',
  x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
  zap: '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"></path>',
};

let activeCategory = "all";
let query = "";

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || ""}</svg>`;
}

function formatPrice(value) {
  return `S/ ${value.toFixed(2)}`;
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function productWhatsAppMessage(product) {
  return `Hola Octamon, estoy interesado en el producto ${product.name} con precio de ${formatPrice(product.price)}. ¿Sigue disponible?`;
}

function badgeClass(availability) {
  if (availability === "Pocas unidades") return "badge-pocas";
  if (availability === "Agotado") return "badge-agotado";
  return "badge-disponible";
}

function renderStaticIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icon(node.dataset.icon);
  });
}

function renderMenuIcon(open) {
  const menuIcon = document.querySelector("[data-menu-icon]");
  if (menuIcon) menuIcon.innerHTML = icon(open ? "x" : "menu");
}

function renderCategories() {
  const grid = document.querySelector("#category-grid");
  grid.innerHTML = categories
    .map((category) => {
      const active = activeCategory === category.id ? " active" : "";
      return `
        <button class="category-card${active}" type="button" aria-pressed="${activeCategory === category.id}" data-category="${category.id}">
          <span class="category-icon"><span class="icon">${icon(category.icon)}</span></span>
          <span>${category.name}</span>
        </button>
      `;
    })
    .join("");
}

function renderSelectOptions() {
  const select = document.querySelector("#category-select");
  select.innerHTML = `
    <option value="all">Todas las categorías</option>
    ${categories.map((category) => `<option value="${category.id}">${category.name}</option>`).join("")}
  `;
  select.value = activeCategory;
}

function renderProducts() {
  const grid = document.querySelector("#product-grid");
  const emptyState = document.querySelector("#empty-state");
  const clearButton = document.querySelector("#clear-filters");
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchCategory = activeCategory === "all" || product.category === activeCategory;
    const matchQuery = !normalizedQuery || product.name.toLowerCase().includes(normalizedQuery);
    return matchCategory && matchQuery;
  });

  clearButton.hidden = !(query.trim() || activeCategory !== "all");
  emptyState.hidden = filtered.length > 0;

  grid.innerHTML = filtered
    .map((product) => {
      const disabled = product.availability === "Agotado";
      const href = disabled ? "#" : buildWhatsAppUrl(productWhatsAppMessage(product));
      return `
        <article class="product-card">
          <div class="product-image">
            <div class="product-emoji" style="background: radial-gradient(circle at 50% 50%, ${product.accent}22, transparent 70%);" aria-hidden="true">
              <span role="img" aria-label="${product.name}">${product.emoji}</span>
            </div>
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <span class="badge ${badgeClass(product.availability)}">${product.availability}</span>
            </div>
            <h3>${product.name}</h3>
            <p class="price">${formatPrice(product.price)}</p>
            <a
              class="product-wa${disabled ? " disabled" : ""}"
              href="${href}"
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled="${disabled}"
              data-disabled="${disabled}"
            >
              <span class="icon">${icon("message-circle")}</span>
              Comprar por WhatsApp
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderAll() {
  renderCategories();
  renderSelectOptions();
  renderProducts();
}

function setActiveCategory(nextCategory) {
  activeCategory = activeCategory === nextCategory ? "all" : nextCategory;
  renderAll();
}

function initWhatsAppLinks() {
  const generalUrl = buildWhatsAppUrl(GENERAL_WA_MESSAGE);
  document.querySelectorAll(".js-wa-general").forEach((link) => {
    link.href = generalUrl;
  });

  const phone = document.querySelector("#footer-phone");
  if (phone) phone.textContent = `+${WHATSAPP_PHONE}`;
}

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobile-menu");

  function setOpen(open) {
    menu.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    renderMenuIcon(open);
  }

  toggle.addEventListener("click", () => {
    setOpen(!menu.classList.contains("open"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  renderMenuIcon(false);
}

function initFilters() {
  const searchInput = document.querySelector("#search-input");
  const select = document.querySelector("#category-select");
  const clearButton = document.querySelector("#clear-filters");
  const categoryGrid = document.querySelector("#category-grid");
  const productGrid = document.querySelector("#product-grid");

  searchInput.addEventListener("input", (event) => {
    query = event.target.value;
    renderProducts();
  });

  select.addEventListener("change", (event) => {
    activeCategory = event.target.value;
    renderAll();
  });

  clearButton.addEventListener("click", () => {
    query = "";
    activeCategory = "all";
    searchInput.value = "";
    renderAll();
  });

  categoryGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    setActiveCategory(button.dataset.category);
  });

  productGrid.addEventListener("click", (event) => {
    const disabledLink = event.target.closest("[data-disabled='true']");
    if (disabledLink) event.preventDefault();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderStaticIcons();
  initWhatsAppLinks();
  renderAll();
  initMobileMenu();
  initFilters();
});
