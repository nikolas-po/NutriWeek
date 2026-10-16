/* ===== NutriWeek App ===== */

const PRODUCTS = [
  {
    id: 'slim-1200',
    name: 'Slim 1200',
    goal: 'weight-loss',
    goalLabel: 'Похудение',
    kcal: 1200,
    protein: 80,
    fat: 35,
    carbs: 110,
    price: 4500,
    days: 7,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
    description: 'Лёгкий рацион на 1200 ккал для активного похудения. 3 приёма пищи + перекус. Без сахара и жареного.',
    menu: {
      mon: 'Овсянка, куриная грудка, салат, творог',
      tue: 'Омлет, индейка, овощи, йогурт',
      wed: 'Гречка, рыба, салат, смузи',
      thu: 'Творог, курица, брокколи',
      fri: 'Овсянка, говядина, овощи',
      weekend: 'Разнообразное меню выходного дня'
    }
  },
  {
    id: 'slim-1400',
    name: 'Slim 1400',
    goal: 'weight-loss',
    goalLabel: 'Похудение',
    kcal: 1400,
    protein: 90,
    fat: 45,
    carbs: 120,
    price: 4900,
    days: 7,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    description: 'Сбалансированный рацион на 1400 ккал для комфортного похудения. 3 приёма пищи + 1 перекус каждый день.',
    menu: {
      mon: 'Овсянка, курица, салат, творог',
      tue: 'Омлет, индейка, овощи, йогурт',
      wed: 'Гречка, рыба, салат, смузи',
      thu: 'Творог, курица, брокколи',
      fri: 'Овсянка, говядина, овощи',
      weekend: 'Разнообразное меню выходного дня'
    }
  },
  {
    id: 'balance-1800',
    name: 'Balance 1800',
    goal: 'maintain',
    goalLabel: 'Поддержание',
    kcal: 1800,
    protein: 110,
    fat: 55,
    carbs: 160,
    price: 5200,
    days: 7,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
    description: 'Рацион для поддержания веса. Сбалансированное питание без дефицита и профицита калорий.',
    menu: {
      mon: 'Яичница, курица, рис, салат',
      tue: 'Овсянка, индейка, овощи, фрукты',
      wed: 'Гречка, рыба, авокадо',
      thu: 'Творог, говядина, киноа',
      fri: 'Омлет, курица, овощи',
      weekend: 'Разнообразное меню выходного дня'
    }
  },
  {
    id: 'balance-2000',
    name: 'Balance 2000',
    goal: 'maintain',
    goalLabel: 'Поддержание',
    kcal: 2000,
    protein: 120,
    fat: 60,
    carbs: 180,
    price: 5500,
    days: 7,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop',
    description: 'Оптимальный рацион на 2000 ккал для поддержания формы и энергии в течение дня.',
    menu: {
      mon: 'Яичница, курица, рис, салат',
      tue: 'Овсянка, индейка, овощи, фрукты',
      wed: 'Гречка, рыба, авокадо',
      thu: 'Творог, говядина, киноа',
      fri: 'Омлет, курица, овощи',
      weekend: 'Разнообразное меню выходного дня'
    }
  },
  {
    id: 'power-2500',
    name: 'Power 2500',
    goal: 'gain',
    goalLabel: 'Набор массы',
    kcal: 2500,
    protein: 160,
    fat: 70,
    carbs: 250,
    price: 5900,
    days: 7,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    description: 'Высококалорийный рацион для набора мышечной массы. Больше белка и сложных углеводов.',
    menu: {
      mon: 'Овсянка с орехами, курица, рис, творог',
      tue: 'Яичница, индейка, гречка, банан',
      wed: 'Блины, говядина, паста, смузи',
      thu: 'Творог, курица, киноа, орехи',
      fri: 'Омлет, рыба, картофель, йогурт',
      weekend: 'Разнообразное меню выходного дня'
    }
  },
  {
    id: 'power-2800',
    name: 'Power 2800',
    goal: 'gain',
    goalLabel: 'Набор массы',
    kcal: 2800,
    protein: 180,
    fat: 80,
    carbs: 280,
    price: 6400,
    days: 7,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
    description: 'Максимальный рацион для интенсивного набора массы. 5 приёмов пищи в день.',
    menu: {
      mon: 'Овсянка с орехами, курица, рис, творог',
      tue: 'Яичница, индейка, гречка, банан',
      wed: 'Блины, говядина, паста, смузи',
      thu: 'Творог, курица, киноа, орехи',
      fri: 'Омлет, рыба, картофель, йогурт',
      weekend: 'Разнообразное меню выходного дня'
    }
  },
  {
    id: 'vegan-1400',
    name: 'Green Vegan 1400',
    goal: 'vegan',
    goalLabel: 'Веган',
    kcal: 1400,
    protein: 70,
    fat: 45,
    carbs: 150,
    price: 5100,
    days: 7,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    description: 'Полностью растительный рацион на 1400 ккал. Без продуктов животного происхождения.',
    menu: {
      mon: 'Овсянка, тофу, салат, хумус',
      tue: 'Смузи-боул, киноа, овощи',
      wed: 'Гречка, нут, авокадо',
      thu: 'Тофу-скрэмбл, чечевица',
      fri: 'Овсянка, темпе, овощи',
      weekend: 'Разнообразное веган-меню'
    }
  },
  {
    id: 'vegan-1800',
    name: 'Green Vegan 1800',
    goal: 'vegan',
    goalLabel: 'Веган',
    kcal: 1800,
    protein: 90,
    fat: 55,
    carbs: 190,
    price: 5400,
    days: 7,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop',
    description: 'Сытный веганский рацион на 1800 ккал с полным набором нутриентов и клетчатки.',
    menu: {
      mon: 'Овсянка, тофу, салат, хумус',
      tue: 'Смузи-боул, киноа, овощи',
      wed: 'Гречка, нут, авокадо',
      thu: 'Тофу-скрэмбл, чечевица',
      fri: 'Овсянка, темпе, овощи',
      weekend: 'Разнообразное веган-меню'
    }
  }
];

// ===== Cart =====
let cart = JSON.parse(localStorage.getItem('nutriweek_cart') || '[]');

function saveCart() {
  localStorage.setItem('nutriweek_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  showToast('Добавлено в корзину');
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.classList.toggle('has-items', count > 0);
  });

  const body = document.getElementById('cart-body');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = '<div class="cart-empty">Корзина пуста<br><br><a href="menu.html" style="color:#22C55E">Перейти в меню →</a></div>';
  } else {
    body.innerHTML = cart.map(item => {
      const p = PRODUCTS.find(pr => pr.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <img src="${p.image}" alt="${p.name}">
          <div class="cart-item-info">
            <h4>${p.name}</h4>
            <div class="meta">${p.goalLabel} • ${p.kcal} ккал</div>
            <div class="price">${formatPrice(p.price * item.qty)} ₽</div>
            <div class="qty-control">
              <button class="qty-btn" onclick="changeQty('${p.id}', -1)">−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="changeQty('${p.id}', 1)">+</button>
              <button class="remove-btn" onclick="removeFromCart('${p.id}')">✕</button>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  const totalEl = document.getElementById('cart-total-sum');
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal()) + ' ₽';
}

function formatPrice(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  updateCartUI();
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===== Filters (Menu page) =====
let currentGoal = 'all';
let currentKcal = 'all';

function filterProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  let filtered = PRODUCTS;
  if (currentGoal !== 'all') {
    filtered = filtered.filter(p => p.goal === currentGoal);
  }
  if (currentKcal !== 'all') {
    const k = parseInt(currentKcal);
    filtered = filtered.filter(p => p.kcal === k);
  }

  grid.innerHTML = filtered.map(p => productCardHTML(p)).join('') ||
    '<p style="grid-column:1/-1;text-align:center;color:#999;padding:40px">Ничего не найдено</p>';
}

function setGoalFilter(goal, btn) {
  currentGoal = goal;
  document.querySelectorAll('[data-filter="goal"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterProducts();
}

function setKcalFilter(kcal, btn) {
  currentKcal = kcal;
  document.querySelectorAll('[data-filter="kcal"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterProducts();
}

function productCardHTML(p) {
  return `
    <div class="product-card">
      <a href="product.html?id=${p.id}">
        <div class="img-wrap"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      </a>
      <div class="info">
        <a href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
        <div class="meta">${p.goalLabel} • ${p.days} дней</div>
        <div class="bottom">
          <div class="price">${formatPrice(p.price)} ₽</div>
          <button class="btn btn-primary btn-sm" onclick="event.preventDefault(); addToCart('${p.id}')">В корзину</button>
        </div>
      </div>
    </div>`;
}

// ===== Product page =====
function loadProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'slim-1400';
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;

  document.title = p.name + ' — NutriWeek';

  const mainImg = document.getElementById('main-img');
  if (mainImg) {
    mainImg.src = p.image;
    mainImg.alt = p.name;
  }

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('product-name', p.name);
  set('product-subtitle', `${p.goalLabel} • ${p.days} дней`);
  set('product-price', formatPrice(p.price));
  set('product-kcal', p.kcal + ' ккал');
  set('product-protein', 'Б ' + p.protein + 'г');
  set('product-fat', 'Ж ' + p.fat + 'г');
  set('product-carbs', 'У ' + p.carbs + 'г');
  set('product-desc', p.description);
  set('tag-kcal', p.kcal + ' ккал');
  set('tag-goal', p.goalLabel);

  const addBtn = document.getElementById('add-to-cart-btn');
  if (addBtn) addBtn.onclick = () => addToCart(p.id);

  // Menu days
  const daysEl = document.getElementById('menu-days');
  if (daysEl && p.menu) {
    const labels = { mon: 'Пн', tue: 'Вт', wed: 'Ср', thu: 'Чт', fri: 'Пт', weekend: 'Сб–Вс' };
    daysEl.innerHTML = Object.entries(p.menu).map(([k, v]) => `
      <div class="day-card">
        <h4>${labels[k] || k}</h4>
        <p>${v}</p>
      </div>`).join('');
  }

  // Breadcrumbs
  const bc = document.getElementById('breadcrumbs');
  if (bc) bc.innerHTML = `<a href="menu.html">Меню</a> / ${p.goalLabel} / ${p.name}`;
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Close cart on overlay click
  const overlay = document.getElementById('cart-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCart();
    });
  }

  // Menu page
  if (document.getElementById('products-grid')) {
    filterProducts();
  }

  // Product page
  if (document.getElementById('product-name')) {
    loadProductPage();
  }
});
