

// 1. STORE SETTINGS

const WHATSAPP_NUMBER = "254768551640";

// 2. PRODUCT DATABASE

const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    category: "Skincare",
    price: 300,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Glow Moisturizing Cream",
    category: "Skincare",
    price: 250,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=600&q=80",
    badge: "Popular"
  },
  {
    id: 3,
    name: "Luxury Lip Gloss",
    category: "Makeup",
    price: 200,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    badge: "New"
  },
  {
    id: 4,
    name: "Matte Lipstick",
    category: "Makeup",
    price: 250,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    badge: ""
  },
  {
    id: 5,
    name: "Golden Hoop Earrings",
    category: "Jewelry",
    price: 150,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
    badge: "Trending"
  },
  {
    id: 6,
    name: "Elegant Gold Necklace",
    category: "Jewelry",
    price: 400,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    badge: ""
  },
  {
    id: 7,
    name: "Classic Ladies Handbag",
    category: "Accessories",
    price: 650,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    badge: "Popular"
  },
  {
    id: 8,
    name: "Fashion Sunglasses",
    category: "Accessories",
    price: 350,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    badge: ""
  },
  {
    id: 9,
    name: "Vitamin C Face Cleanser",
    category: "Skincare",
    price: 300,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    badge: "New"
  },
  {
    id: 10,
    name: "Makeup Brush Set",
    category: "Makeup",
    price: 550,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    badge: ""
  },
  {
    id: 11,
    name: "Pearl Bracelet",
    category: "Jewelry",
    price: 550,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
    badge: "New"
  },
  {
    id: 12,
    name: "Stylish Ladies Purse",
    category: "Accessories",
    price: 550,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80",
    badge: ""
  },
 
  {
    id: 13,
    name: "Bonnet",
    category: "Accessories",
    price: 250,
    image: " img.jpg/IMG-20260925-WA0041.jpg",
    badge: ""
  },
   {
    id: 14,
    name: "Hair Removal Spray Foam",
    category: "Skincare",
    price: 400,
    image: "img.jpg/IMG-20260925-WA0037.jpg",
    badge: ""
  },
   {
    id: 15,
    name: "Silk Durag ",
    category: "Accessories",
    price: 200,
    image: " img.jpg/IMG-20260925-WA0039.jpg",
    badge: ""
  },

  {
    id: 16,
    name: "Body Splash",
    category: "Makeup",
    price: 350,
    image: " img.jpg/IMG-20260925-WA0038.jpg",
    badge: ""
  },
    {
    id: 17,
    name: "Moana Clips",
    category: "Accessories",
    price: 80,
    image: " img.jpg/IMG-20260925-WA0036.jpg",
    badge: ""
  },
    {
    id: 18,
    name: "Pimple/Acne Patch",
    category: "Makeup",
    price: 200,
    image: "img.jpg/IMG-20260925-WA0033.jpg ",
    image:"img.jpg/IMG-20260925-WA0035.jpg",
    badge: ""
  },
    {
    id: 19,
    name: "Edge Brush",
    category: "Makeup",
    price: 150,
    image: " img.jpg/IMG-20260925-WA0034.jpg",
    badge: ""
  },
    {
    id: 20,
    name: "Silk Scarf",
    category: "Accessories",
    price: 200,
    image: " img.jpg/IMG-20260925-WA0032.jpg",
    badge: ""
  },
    {
    id: 21,
    name: "Asante Soap",
    category: "Skincare",
    price: 250,
    image: " img.jpg/IMG-20260925-WA0031.jpg",
    badge: ""
  },
    {
    id: 22,
    name: "Clear Mascara",
    category: "Makeup",
    price: 150,
    image: " img.jpg/IMG-20260925-WA0030.jpg",
    badge: ""
  },  
    {
    id: 23,
    name: "Rechargable Mini Hand Fan",
    category: "Accessories",
    price: 500,
    image: " img.jpg/IMG-20260925-WA0029.jpg",
    badge: ""
  },
    {
    id: 24,
    name: "Foot Scraper",
    category: "Skincare",
    price: 350,
    image: " img.jpg/IMG-20260925-WA0028.jpg",
    badge: ""
  },
    {
    id: 25,
    name: "Vaseline Lip Therapies",
    category: " Skincare",
    price: 250,
    image: "img.jpg/IMG-20260925-WA0024.jpg",
    badge: ""
  },
    {
    id: 26,
    name: "Fruit Lip oil",
    category: "Makeup",
    price: 150,
    image: " img.jpg/IMG-20260925-WA0026.jpg",
    badge: ""
  },
    {
    id: 27,
    name: "Soft Glove sponge",
    category: "Skincare",
    price: 100,
    image: " img.jpg/IMG-20260925-WA0025.jpg",
    badge: ""
  },
    {
    id: 28,
    name: "Vaseline 7g Lip Therapies",
    category: "Skincare",
    price: 150,
    image: "img.jpg/IMG-20260925-WA0027.jpg",
    badge: ""
  },
    {
    id: 29,
    name: "Facial Brush",
    category: "Skincare",
    price: 350,
    image: " img.jpg/IMG-20260925-WA0023.jpg",
    image:"img.jpg/IMG-20260925-WA0022.jpg",
    badge: ""
  },
    {
    id: 30,
    name: "Golden Kharma 35Ml",
    category: "Makeup",
    price: 300,
    image: "img.jpg/IMG-20260925-WA0021.jpg ",
    badge: ""
  },
    {
    id: 31,
    name: "Mayar 35Ml",
    category: " Makeup",
    price: 300,
    image: " img.jpg/IMG-20260925-WA0020.jpg",
    badge: ""
  },
     {
    id: 32,
    name: "Candy Yara 35Ml",
    category: "Makeup",
    price: 300,
    image: "img.jpg/IMG-20260925-WA0019.jpg ",
    badge: ""
  },
     {
    id: 33,
    name: "Scrunchie",
    category: "Accessories",
    price: 100,
    image: " img.jpg/IMG-20260925-WA0018.jpg",
    badge: ""
  },
     {
    id: 34,
    name: "Berries weekend 35Ml",
    category: "Makeup",
    price: 300,
    image: " img.jpg/IMG-20260925-WA0017.jpg",
    badge: ""
  },
     {
    id: 35,
    name: "DR.Rashel Face And Cream Serum",
    category: "Skincare",
    price: 500,
    image: " img.jpg/IMG-20260925-WA0016.jpg",
    image:"img.jpg/IMG-20260925-WA0008.jpg",
    badge: ""
  },
     {
    id: 36,
    name: "Wrist Bracelet",
    category: "Jewelry",
    price: 250,
    image: " img.jpg/IMG-20260925-WA0015.jpg",
    badge: ""
  },
     {
    id: 37,
    name: "DR. Rashel Sunscreen",
    category: "Skincare",
    price: 500,
    image: " img.jpg/IMG-20260925-WA0014.jpg",
    badge: ""
  },
     {
    id: 38,
    name: "Headband",
    category: "Accessories",
    price: 150,
    image: " img.jpg/IMG-20260925-WA0013.jpg",
    badge: ""
  },
     {
    id: 39,
    name: "Hair Claws",
    category: "Accessories",
    price: 200,
    image: " img.jpg/IMG-20260925-WA0012.jpg",
    badge: ""
  },
     {
    id: 40,
    name: "Hair Bows",
    category: "Accessories",
    price: 200,
    image: " img.jpg/IMG-20260925-WA0011.jpg",
    badge: ""
  },
     {
    id: 41,
    name: "Aloe Vera Moisturizing Gel",
    category: "Skincare",
    price: 300,
    image: "img.jpg/IMG-20260925-WA0010.jpg ",
    badge: ""
  },
     {
    id: 42,
    name: "Tinted Sunscreen",
    category: "Skincare",
    price: 600,
    image: "img.jpg/IMG-20260925-WA0009.jpg ",
    badge: ""
  },
     {
    id: 43,
    name: " Hobby Shower Gel",
    category: "Skincare",
    price: 500,
    image: "img.jpg/IMG-20260925-WA0007.jpg ",
    badge: ""
  },
     {
    id: 44,
    name: " Ballet Nourishing Body Oil",
    category: "Skincare",
    price: 250,
    image: " img.jpg/IMG-20260925-WA0006.jpg",
    badge: ""
  },
     {
    id: 45,
    name: "Mist/Water Spray Bottle",
    category: "Accessories",
    price: 350,
    image: " img.jpg/IMG-20260925-WA0005.jpg",
    badge: ""
  },

];

// 3. ELEMENTS

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const overlay = document.getElementById("overlay");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const toast = document.getElementById("toast");

// 4. APPLICATION STATE

let activeCategory = "All";
let searchTerm = "";
let sortOption = "default";

let cart = loadStorage("gg_cart", []);
let wishlist = loadStorage("gg_wishlist", []);

// Safely read local storage
function loadStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

// Save cart and wishlist between visits
function saveStorage() {
  try {
    localStorage.setItem("gg_cart", JSON.stringify(cart));
    localStorage.setItem("gg_wishlist", JSON.stringify(wishlist));
  } catch {
    showToast("Unable to save data on this device.");
  }
}

// 5. FORMAT KENYAN SHILLINGS

function formatPrice(amount) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  }).format(amount);
}

// 6. SHOW TOAST MESSAGE

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// 7. DISPLAY PRODUCTS

function renderProducts() {
  let filteredProducts = [...products];

  // Category filter
  if (activeCategory !== "All") {
    filteredProducts = filteredProducts.filter(product =>
      product.category === activeCategory
    );
  }

  // Search filter
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();

    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  }

  // Sorting
  if (sortOption === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "name") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  productCount.textContent =
    `${filteredProducts.length} product(s) found`;

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="no-products">
        <h3>No products found 💗</h3>
        <p>Try another search or category.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card">

      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        ${product.badge ? `
          <span class="product-badge">${product.badge}</span>
        ` : ""}

        <button
          class="wishlist-btn ${wishlist.includes(product.id) ? "active" : ""}"
          data-wishlist="${product.id}"
          aria-label="Add ${product.name} to wishlist"
          aria-pressed="${wishlist.includes(product.id)}"
        >
          ${wishlist.includes(product.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <span class="product-category">
          ${product.category}
        </span>

        <h3>${product.name}</h3>

        <div class="product-price">
          ${formatPrice(product.price)}
        </div>

        <button
          class="add-cart-btn"
          data-add="${product.id}"
        >
          + Add to Bag
        </button>
      </div>

    </article>
  `).join("");
}

// 8. CATEGORY FILTERS

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn === button);
  });

  renderProducts();
});

// Category cards also filter the collection
document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle(
        "active",
        btn.dataset.category === activeCategory
      );
    });

    renderProducts();

    document.getElementById("shop").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 9. PRODUCT SEARCH

document.getElementById("searchToggle").addEventListener("click", () => {
  searchBar.classList.toggle("show");

  if (searchBar.classList.contains("show")) {
    searchInput.focus();
  }
});

document.getElementById("closeSearch").addEventListener("click", () => {
  searchBar.classList.remove("show");
  searchInput.value = "";
  searchTerm = "";
  renderProducts();
});

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value;
  renderProducts();
});

// 10. SORT PRODUCTS

sortSelect.addEventListener("change", event => {
  sortOption = event.target.value;
  renderProducts();
});

// 11. WISHLIST

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-wishlist]");

  if (!button) return;

  const id = Number(button.dataset.wishlist);

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast("Removed from your wishlist");
  } else {
    wishlist.push(id);
    showToast("Added to your wishlist ♥");
  }

  saveStorage();
  renderProducts();
});

// 12. ADD PRODUCTS TO CART

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");

  if (!button) return;

  const id = Number(button.dataset.add);
  addToCart(id);
});

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveStorage();
  renderCart();
  showToast(`${product.name} added to your bag!`);
}

// 13. CART TOTALS

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);

    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// 14. DISPLAY CART

function renderCart() {
  // Remove any cart records that no longer match a product
  cart = cart.filter(item =>
    products.some(product => product.id === item.id)
  );

  cartCount.textContent = getCartCount();
  cartTotal.textContent = formatPrice(getCartTotal());

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div style="font-size:45px">🛍️</div>
        <h3>Your bag is empty</h3>
        <p>Discover something beautiful today!</p>
      </div>
    `;

    saveStorage();
    return;
  }

  cartItems.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">

        <div>
          <h4>${product.name}</h4>
          <p>${formatPrice(product.price * item.quantity)}</p>

          <div class="quantity-controls">
            <button
              data-decrease="${product.id}"
              aria-label="Decrease quantity"
            >−</button>

            <span>${item.quantity}</span>

            <button
              data-increase="${product.id}"
              aria-label="Increase quantity"
            >+</button>
          </div>
        </div>

        <button
          class="remove-item"
          data-remove="${product.id}"
          aria-label="Remove ${product.name}"
        >✕</button>
      </div>
    `;
  }).join("");

  saveStorage();
}

// 15. CHANGE CART QUANTITY

cartItems.addEventListener("click", event => {
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const remove = event.target.closest("[data-remove]");

  if (increase) {
    changeQuantity(Number(increase.dataset.increase), 1);
  }

  if (decrease) {
    changeQuantity(Number(decrease.dataset.decrease), -1);
  }

  if (remove) {
    const id = Number(remove.dataset.remove);

    cart = cart.filter(item => item.id !== id);

    renderCart();
    showToast("Product removed from bag");
  }
});

function changeQuantity(id, amount) {
  const item = cart.find(item => item.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  renderCart();
}

// 16. OPEN AND CLOSE CART

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";

  document.getElementById("closeCart").focus();
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";

  document.getElementById("cartToggle").focus();
}

document.getElementById("cartToggle").addEventListener("click", openCart);

document.getElementById("closeCart").addEventListener("click", closeCart);

document.getElementById("continueShopping").addEventListener("click", closeCart);

overlay.addEventListener("click", closeCart);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
    document.getElementById("navLinks").classList.remove("open");
    document.getElementById("menuToggle")
      .setAttribute("aria-expanded", "false");
  }
});

// 17. MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// 18. WHATSAPP CHECKOUT

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Your shopping bag is empty!");
    return;
  }

  if (!/^254\d{9}$/.test(WHATSAPP_NUMBER)) {
    showToast("Please configure your WhatsApp business number in script.js");
    return;
  }

  const orderLines = cart.map(item => {
    const product = products.find(p => p.id === item.id);

    return `${product.name} x ${item.quantity} = ${
      formatPrice(product.price * item.quantity)
    }`;
  });

  const message = [
    "Hello Phemi's Glam & Glow Boutique! 💖",
    "",
    "I would like to place an order:",
    "",
    ...orderLines,
    "",
    `Subtotal: ${formatPrice(getCartTotal())}`,
    "",
    "Please confirm availability, delivery charges and payment instructions.",
    "My name and delivery location are:"
  ].join("\n");

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

// 19. WHATSAPP CUSTOMER CARE

document.getElementById("whatsappLink").addEventListener("click", event => {
  event.preventDefault();

  if (!/^254\d{9}$/.test(WHATSAPP_NUMBER)) {
    showToast("Please configure your WhatsApp business number first.");
    return;
  }

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hello Glow & Glam Boutique! I would like to make an inquiry."
    )}`,
    "_blank",
    "noopener,noreferrer"
  );
});

// 20. NEWSLETTER DEMO

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const phoneInput =
        document.getElementById("newsletterPhone");

    const message =
        document.getElementById("newsletterMessage");

    const customerPhone = phoneInput.value.trim();

    // YOUR ADMIN'S WHATSAPP NUMBER
    const adminPhone = "254768551640";

    // Check that the customer entered a number
    if (!customerPhone) {
        message.textContent =
            "Please enter your phone number.";
        return;
    }

    // Message that will appear in WhatsApp
    const whatsappMessage =
        `Hello, I am interested in your products.

My phone number is: ${customerPhone}

Please contact me.`;

    // Create WhatsApp link
    const whatsappURL =
        "https://wa.me/" + adminPhone +
        "?text=" + encodeURIComponent(whatsappMessage);

    // Redirect to WhatsApp
    window.location.href = whatsappURL;

});


// 21. FOOTER YEAR

document.getElementById("year").textContent = new Date().getFullYear();

// 22. INITIALIZE THE SHOP

renderProducts();
renderCart(); 