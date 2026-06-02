// ==========================================
// HOW TO USE CUSTOM IMAGES:
// 1. Add your images to the assets/images/ folders
// 2. Update the file paths below to match your image names
// 3. (Optional) You can still use AI images by keeping the long URLs
// ==========================================

const products = [
    {
        id: 1,
        name: 'بیرکین ۳۰',
        category: 'کیف‌های دستی',
        price: 12500,
        rating: 5,
        // CUSTOM IMAGE: Replace this URL with your image path like:
        // image: 'assets/images/products/birkin-30.jpg',
        image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20black%20leather%20Birkin%20handbag%20elegant%20design%20premium%20fashion&image_size=square_hd',
        badge: 'پرفروش',
        description: 'بیرکین نمادین ۳۰ در چرم مشکی بی‌نظیر. با دقت کامل دست‌ساز شده، این قطعه بی‌زمان نشان‌دهنده اوج لوکس است.',
        material: 'چرم کلفسکین',
        dimensions: '۳۰ × ۲۲ × ۱۶ سانتی‌متر'
    },
    {
        id: 2,
        name: 'کلی ۲۵',
        category: 'کیف‌های دستی',
        price: 11000,
        rating: 5,
        // CUSTOM IMAGE: 'assets/images/products/kelly-25.jpg',
        image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=elegant%20tan%20leather%20Kelly%20handbag%20luxury%20designer%20fashion&image_size=square_hd',
        badge: 'جدید',
        description: 'زیبا و نفیس، کلی ۲۵ با سیلوئت ساختاریافته و بسته‌بندی امضایی خود زیبایی بی‌زمان را ارائه می‌دهد.',
        material: 'چرم اپسام',
        dimensions: '۲۵ × ۱۷ × ۷ سانتی‌متر'
    },
    {
        id: 3,
        name: 'کانستانس ۲۴',
        category: 'کیف‌های شولدر',
        price: 8500,
        rating: 4.8,
        // CUSTOM IMAGE: 'assets/images/products/constance-24.jpg',
        image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=classic%20navy%20Constance%20crossbody%20bag%20luxury%20leather&image_size=square_hd',
        description: 'کیف لوکس روزمره کامل با بسته‌بندی H نمادین و بند شولدر قابل تنظیم برای استفاده متنوع.',
        material: 'چرم باکس',
        dimensions: '۲۴ × ۱۶ × ۵ سانتی‌متر'
    },
    {
        id: 4,
        name: 'گاردن پارتی ۳۶',
        category: 'کیف‌های توت',
        price: 4500,
        rating: 4.9,
        // CUSTOM IMAGE: 'assets/images/products/garden-party-36.jpg',
        image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=spacious%20Garden%20Party%20tote%20bag%20beige%20canvas%20leather&image_size=square_hd',
        badge: 'محدود',
        description: 'به‌طور بی‌تلاشی شیک و فوق‌العاده کاربردی، کیف توت گاردن پارتی برای کار یا سفرهای آخر هفته عالی است.',
        material: 'پارچه و چرم',
        dimensions: '۳۶ × ۲۶ × ۱۷ سانتی‌متر'
    },
    {
        id: 5,
        name: 'اولین ۲۹',
        category: 'کیف‌های شولدر',
        price: 3800,
        rating: 4.7,
        // CUSTOM IMAGE: 'assets/images/products/evelyne-29.jpg',
        image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=casual%20luxury%20Evelyne%20crossbody%20bag%20brown%20leather&image_size=square_hd',
        description: 'لوکس کم‌پشت با کارایی روزمره در این کیف شولدر با طرح H سوراخ‌دار امضایی.',
        material: 'چرم کلمنس',
        dimensions: '۲۹ × ۳۰ × ۸ سانتی‌متر'
    },
    {
        id: 6,
        name: 'بولide ۳۱',
        category: 'کیف‌های دستی',
        price: 7200,
        rating: 4.8,
        // CUSTOM IMAGE: 'assets/images/products/bolide-31.jpg',
        image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=sleek%20Bolide%20handbag%20burgundy%20leather%20luxury%20design&image_size=square_hd',
        description: 'کیف زیپ‌دار اصلی هرمس، با شکل گرد متمایز و بسته‌بندی زیپ، سبک بی‌زمان ارائه می‌دهد.',
        material: 'چرم سویفت',
        dimensions: '۳۱ × ۲۰ × ۱۳ سانتی‌متر'
    },
    {
        id: 7,
        name: 'پیکوتین لاک ۲۲',
        category: 'کیف‌های توت',
        price: 3200,
        rating: 4.6,
        // CUSTOM IMAGE: 'assets/images/products/picotin-22.jpg',
        image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=charming%20Picotin%20Lock%20bucket%20bag%20cream%20leather&image_size=square_hd',
        description: 'به‌طور لذت‌بخش بدون ساختار و در عین حال به‌طور انکارناپذیر لوکس، پیکوتین لاک جذابیت بی‌تلاشی را به هر استایل اضافه می‌کند.',
        material: 'چرم کلمنس',
        dimensions: '۲۲ × ۲۱ × ۱۸ سانتی‌متر'
    },
    {
        id: 8,
        name: 'جیپسییر ۳۴',
        category: 'کیف‌های مسافرتی',
        price: 9800,
        rating: 4.9,
        // CUSTOM IMAGE: 'assets/images/products/jypsiere-34.jpg',
        image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20Jypsiere%20travel%20bag%20black%20leather%20luxury&image_size=square_hd',
        badge: 'جدید',
        description: 'همراه مسافرتی نهایی، که در هر جزئیات کارایی مقاوم را با لوکس تصفیه‌شده ترکیب می‌کند.',
        material: 'چرم بارنیا',
        dimensions: '۳۴ × ۳۶ × ۱۴ سانتی‌متر'
    }
];

let cart = [];
let wishlist = [];

function init() {
    renderProducts('bestSellersGrid', products.slice(0, 4));
    renderProducts('newArrivalsGrid', products.slice(4, 8));
    renderProducts('shopProductsGrid', products);
    setupEventListeners();
    updateCartUI();
}

function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = productList.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-badge">
                ${product.badge ? `<span>${product.badge}</span>` : ''}
            </div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button onclick="quickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <button class="product-wishlist ${wishlist.includes(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                <i class="${wishlist.includes(product.id) ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                </div>
                <div class="product-price">$${product.price.toLocaleString()}</div>
            </div>
        </div>
    `).join('');
    
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                const productId = parseInt(card.dataset.productId);
                showProductDetail(productId);
            }
        });
    });
}

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productBreadcrumb').textContent = product.name;
    
    const detailContainer = document.getElementById('productDetail');
    detailContainer.innerHTML = `
        <div class="container">
            <div class="product-detail-layout">
                <div class="product-gallery">
                    <div class="gallery-thumbs">
                        <img src="${product.image}" alt="${product.name}" class="active">
                        <img src="${product.image}" alt="${product.name}">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="gallery-main">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                </div>
                <div class="product-info-detail">
                    <p class="section-subtitle">${product.category}</p>
                    <h1>${product.name}</h1>
                    <div class="product-rating">
                        ${renderStars(product.rating)}
                        <span style="margin-left: 0.5rem; color: var(--color-gray-dark);">${product.rating}</span>
                    </div>
                    <div class="product-price-detail">$${product.price.toLocaleString()}</div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-highlights">
                        <div class="highlight-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${product.material}</span>
                        </div>
                        <div class="highlight-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${product.dimensions}</span>
                        </div>
                        <div class="highlight-item">
                            <i class="fas fa-check-circle"></i>
                            <span>Handcrafted in France</span>
                        </div>
                        <div class="highlight-item">
                            <i class="fas fa-check-circle"></i>
                            <span>Lifetime Warranty</span>
                        </div>
                    </div>
                    <div class="product-actions-detail">
                        <div class="quantity-selector">
                            <button onclick="updateQuantity(-1)">-</button>
                            <input type="number" id="quantity" value="1" min="1">
                            <button onclick="updateQuantity(1)">+</button>
                        </div>
                        <button class="btn btn-primary" onclick="addToCart(${product.id}); showToast('Item added to cart!');">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </button>
                        <button class="btn btn-secondary" onclick="showPage('checkout')">
                            Buy Now
                        </button>
                    </div>
                    <div class="trust-badges">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-amex"></i>
                        <i class="fas fa-shipping-fast"></i>
                        <i class="fas fa-undo"></i>
                    </div>
                </div>
            </div>
            <div class="related-products">
                <div class="section-header">
                    <p class="section-subtitle">You May Also Like</p>
                    <h2 class="section-title">Related Products</h2>
                </div>
                <div class="products-grid" id="relatedProducts"></div>
            </div>
        </div>
    `;
    
    const related = products.filter(p => p.id !== product.id).slice(0, 4);
    renderProducts('relatedProducts', related);
    
    showPage('product');
}

function updateQuantity(delta) {
    const input = document.getElementById('quantity');
    if (input) {
        let value = parseInt(input.value) + delta;
        if (value < 1) value = 1;
        input.value = value;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    updateCartUI();
    showToast('Item added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTax = document.getElementById('cartTax');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTax = document.getElementById('checkoutTax');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    
    if (cartCount) cartCount.textContent = totalItems;
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = emptyCart ? emptyCart.outerHTML : '';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p style="color: var(--color-gray-dark); font-size: 0.9rem;">${item.category}</p>
                        <div class="quantity-selector" style="margin-top: 0.5rem; width: fit-content;">
                            <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                            <input type="number" value="${item.quantity}" min="1" readonly>
                            <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-times"></i> Remove
                        </button>
                        <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    if (cartSubtotal) cartSubtotal.textContent = `$${subtotal.toLocaleString()}`;
    if (cartTax) cartTax.textContent = `$${tax.toFixed(2)}`;
    if (cartTotal) cartTotal.textContent = `$${total.toLocaleString()}`;
    
    if (checkoutItems) {
        checkoutItems.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="checkout-item-info">
                    <h5>${item.name}</h5>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <span>$${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        `).join('');
    }
    
    if (checkoutSubtotal) checkoutSubtotal.textContent = `$${subtotal.toLocaleString()}`;
    if (checkoutTax) checkoutTax.textContent = `$${tax.toFixed(2)}`;
    if (checkoutTotal) checkoutTotal.textContent = `$${total.toLocaleString()}`;
}

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }
    
    renderProducts('bestSellersGrid', products.slice(0, 4));
    renderProducts('newArrivalsGrid', products.slice(4, 8));
    renderProducts('shopProductsGrid', products);
    
    showToast(index > -1 ? 'Removed from wishlist' : 'Added to wishlist!');
}

function quickView(productId) {
    showProductDetail(productId);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (toastMessage) toastMessage.textContent = message;
    if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    showToast('Thank you for subscribing!');
    e.target.reset();
}

function handleContactSubmit(e) {
    e.preventDefault();
    showToast('Message sent successfully!');
    e.target.reset();
}

function showSuccessMessage() {
    cart = [];
    updateCartUI();
    showToast('Order placed successfully!');
    setTimeout(() => showPage('home'), 2000);
}

function setupEventListeners() {
    const filterToggle = document.getElementById('filterToggle');
    const filtersContent = document.getElementById('filtersContent');
    
    if (filterToggle && filtersContent) {
        filterToggle.addEventListener('click', () => {
            filtersContent.classList.toggle('show');
        });
    }
    
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });
    
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            } else {
                navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
            }
            lastScroll = currentScroll;
        }
    });
}

document.addEventListener('DOMContentLoaded', init);

window.showPage = showPage;
window.showProductDetail = showProductDetail;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleWishlist = toggleWishlist;
window.quickView = quickView;
window.updateQuantity = updateQuantity;
window.handleNewsletterSubmit = handleNewsletterSubmit;
window.handleContactSubmit = handleContactSubmit;
window.showSuccessMessage = showSuccessMessage;