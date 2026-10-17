var TELEGRAM_BOT_TOKEN = '8940465432:AAGb_m9VIslWjufrD3XoQkTx5LbNQx8_bKE';
var TELEGRAM_CHAT_ID = '7791885657';
var TELEGRAM_API = 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage';

// ============================================
// PRODUCT DATABASE
// ============================================
var PRODUCTS = [
    // ========== MAKEUP ==========
    { id: 1, name: 'Complete Makeup Collection', category: 'makeup', price: 2500, oldPrice: 3200, description: 'Everything you need for a full face. Foundation, powder, blush, and eyeshadow.', image: 'img/02_makeup_collection.jpg', rating: 5, reviews: 40, badge: 'sale', inStock: true, featured: true },
    { id: 2, name: 'Face Makeup Products', category: 'makeup', price: 950, oldPrice: null, description: 'Complete face makeup kit for a flawless everyday look.', image: 'img/27_face_makeup_products.jpg', rating: 5, reviews: 18, badge: 'hot', inStock: true, featured: true },

    // ========== LIPSTICKS ==========
    { id: 3, name: 'Everyday Matte Lipstick', category: 'lipsticks', price: 450, oldPrice: 600, description: 'A beautiful finishing touch. Long-lasting matte finish for all-day wear.', image: 'img/04_lipsticks.jpg', rating: 5, reviews: 24, badge: 'sale', inStock: true, featured: true },
    { id: 4, name: 'Lipstick & Gloss Combo', category: 'lipsticks', price: 550, oldPrice: 700, description: 'The perfect combo of lipstick and gloss for any occasion.', image: 'img/22_lipstick_and_gloss.jpg', rating: 4.5, reviews: 19, badge: 'sale', inStock: true, featured: false },

    // ========== LIP GLOSS ==========
    { id: 5, name: 'Shiny Lip Gloss', category: 'lipgloss', price: 300, oldPrice: null, description: 'High-shine finish with a hint of color. Moisturizing and non-sticky.', image: 'img/14_lip_gloss.jpg', rating: 4, reviews: 12, badge: 'new', inStock: true, featured: false },

    // ========== SKINCARE ==========
    { id: 6, name: 'Complete Skincare Set', category: 'skincare', price: 1800, oldPrice: 2200, description: 'Full skincare routine kit for healthy, glowing skin every day.', image: 'img/03_skincare_set.jpg', rating: 5, reviews: 35, badge: 'sale', inStock: true, featured: true },
    { id: 7, name: 'Green Skincare Collection', category: 'skincare', price: 1200, oldPrice: null, description: 'Natural, plant-based skincare for sensitive and dry skin.', image: 'img/08_green_skincare.jpg', rating: 4.5, reviews: 18, badge: null, inStock: true, featured: false },

    // ========== SERUM ==========
    { id: 8, name: 'Daily Glow Serum', category: 'serum', price: 950, oldPrice: null, description: 'Brightens skin and reduces dark spots. Your daily skincare essential.', image: 'img/16_serum_products.jpg', rating: 5, reviews: 28, badge: 'hot', inStock: true, featured: true },

    // ========== FACIAL MASK ==========
    { id: 9, name: 'Hydrating Facial Mask', category: 'mask', price: 500, oldPrice: null, description: 'Rejuvenating facial mask for a spa-like experience at home.', image: 'img/13_facial_mask.jpg', rating: 5, reviews: 20, badge: 'new', inStock: true, featured: false },

    // ========== SUNSCREEN ==========
    { id: 10, name: 'Sun Protection Cream', category: 'sunscreen', price: 650, oldPrice: null, description: 'Protect your skin with this lightweight SPF cream.', image: 'img/25_sunscreen.jpg', rating: 4.5, reviews: 14, badge: null, inStock: true, featured: false },

    // ========== PERFUME ==========
    { id: 11, name: 'Signature Scent Collection', category: 'perfume', price: 1800, oldPrice: 2200, description: 'Find a fragrance that feels like you. Sweet, floral and long-lasting.', image: 'img/05_perfume_collection.jpg', rating: 5, reviews: 35, badge: 'sale', inStock: true, featured: true },
 { id: 12, name: 'Pink Perfume Elegance', category: 'perfume', price: 1600, oldPrice: null, description: 'A romantic pink fragrance. Perfect for everyday elegance.', image: 'img/18_pink_perfume.jpg', rating: 4.5, reviews: 18, badge: null, inStock: true, featured: false },
    { id: 13, name: 'Luxury Gift Fragrance', category: 'perfume', price: 2500, oldPrice: null, description: 'Warm, luxurious scent for special moments. Long-lasting oriental.', image: 'img/28_gift_box.jpg', rating: 5, reviews: 25, badge: 'hot', inStock: true, featured: true },

    // ========== EYE MAKEUP ==========
    { id: 14, name: 'Eye Makeup Essentials', category: 'eye', price: 650, oldPrice: null, description: 'Complete eye makeup set including eyeliner, mascara, and shadows.', image: 'img/10_eye_makeup.jpg', rating: 4.5, reviews: 16, badge: null, inStock: true, featured: false },
    { id: 15, name: 'Eyeshadow Palette 12 Colors', category: 'eye', price: 1200, oldPrice: 1500, description: '12 stunning shades for day and night. Highly pigmented.', image: 'img/19_makeup_palette.jpg', rating: 5, reviews: 32, badge: 'sale', inStock: true, featured: true },

    // ========== MASCARA ==========
    { id: 16, name: 'Volumizing Mascara Set', category: 'mascara', price: 350, oldPrice: null, description: 'Volume and length for dramatic lashes. Smudge-proof formula.', image: 'img/29_mascara_tools.jpg', rating: 4.5, reviews: 15, badge: 'new', inStock: true, featured: false },

    // ========== BLUSH & POWDER ==========
    { id: 17, name: 'Blush & Powder Set', category: 'blush', price: 800, oldPrice: 1000, description: 'Soft, blendable blush and setting powder for a natural glow.', image: 'img/09_blush_and_powder.jpg', rating: 4.5, reviews: 20, badge: 'sale', inStock: true, featured: true },

    // ========== NAIL POLISH ==========
    { id: 18, name: 'Nail Polish Collection', category: 'nail', price: 400, oldPrice: null, description: 'Beautiful long-lasting nail polish shades for every mood.', image: 'img/11_nail_polish.jpg', rating: 4.5, reviews: 22, badge: 'new', inStock: true, featured: false },

    // ========== BODY CARE ==========
    { id: 19, name: 'Body Care Complete Set', category: 'body', price: 900, oldPrice: 1100, description: 'Make your daily care feel special. Body wash, lotion, and scrub.', image: 'img/06_bodycare.jpg', rating: 5, reviews: 25, badge: 'sale', inStock: true, featured: true },

    // ========== BODY LOTION ==========
    { id: 20, name: 'Daily Body Lotion', category: 'lotion', price: 600, oldPrice: 750, description: 'Deep moisturizing for soft, glowing skin. Natural ingredients.', image: 'img/23_body_lotion.jpg', rating: 4.5, reviews: 22, badge: 'sale', inStock: true, featured: true },

    // ========== HAIR ==========
    { id: 21, name: 'Hair Extension Care', category: 'body', price: 1500, oldPrice: null, description: 'Premium hair extensions and care products for beautiful hair.', image: 'img/20_hair_extensions.jpg', rating: 4.5, reviews: 15, badge: null, inStock: true, featured: false },

    // ========== BRUSHES & TOOLS ==========
    { id: 22, name: 'Complete Makeup Brush Set', category: 'brushes', price: 700, oldPrice: null, description: 'A collection of brushes for foundation, powder, blush, and eyes.', image: 'img/07_makeup_brushes.jpg', rating: 5, reviews: 28, badge: 'hot', inStock: true, featured: true },

    // ========== ACCESSORIES ==========
    { id: 23, name: 'Beauty Bag & Accessories', category: 'accessories', price: 500, oldPrice: null, description: 'Elegant beauty bag to store all your favorite cosmetics.', image: 'img/12_beauty_bag.jpg', rating: 4.5, reviews: 18, badge: 'new', inStock: true, featured: false },
    { id: 24, name: 'Beauty Accessories Kit', category: 'accessories', price: 850, oldPrice: 1100, description: 'Complete beauty accessories with sponges, mirrors, and tools.', image: 'img/24_beauty_accessories.jpg', rating: 4.5, reviews: 20, badge: 'sale', inStock: true, featured: true },
 { id: 25, name: 'Cosmetics Shop Display', category: 'accessories', price: 400, oldPrice: null, description: 'A practical mirror for makeup application and quick touch-ups.', image: 'img/21_cosmetics_shop.jpg', rating: 4, reviews: 12, badge: null, inStock: true, featured: false }
];

// ============================================
// STATE
// ============================================
var cart = JSON.parse(localStorage.getItem('yusriCart')) || [];
var wishlist = JSON.parse(localStorage.getItem('yusriWishlist')) || [];
var reviews = JSON.parse(localStorage.getItem('yusriReviews')) || [];
var currentFilter = 'all';
var currentSort = 'default';
var currentRating = 5;
var productsDisplayed = 12;

var DEFAULT_REVIEWS = [
    { name: 'Sara M.', rating: 5, text: 'Amazing quality! The lipstick is my new favorite. Beautiful color.', date: '2 weeks ago' },
    { name: 'Fatima A.', rating: 5, text: 'Fast delivery and beautiful packaging. My skin has never looked better!', date: '1 month ago' },
    { name: 'Hanan K.', rating: 4.5, text: 'Great customer service. They helped me choose the perfect perfume.', date: '3 weeks ago' },
    { name: 'Mariam T.', rating: 5, text: 'The brush set is so soft and professional. Perfect for daily use!', date: '1 week ago' },
    { name: 'Aisha B.', rating: 5, text: 'YUSRI BEAUTY is my go-to shop. Always original products and great prices.', date: '2 months ago' },
    { name: 'Zainab H.', rating: 4.5, text: 'I ordered the gift set for my sister and she loved it. Beautiful!', date: '1 month ago' }
];

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadReviews();
    displayProducts();
    updateCartUI();
    updateWishlistCount();
    setupScrollEffects();
    setupScrollListeners();
});

// ============================================
// DISPLAY PRODUCTS
// ============================================
function displayProducts(filter, sort) {
    if (!filter) filter = 'all';
    if (!sort) sort = 'default';
    
    var grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    var filtered = filter === 'all' ? PRODUCTS.slice() : PRODUCTS.filter(function(p) { return p.category === filter; });
    filtered = sortProductsList(filtered, sort);
    var toShow = filtered.slice(0, productsDisplayed);
    
    if (toShow.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#8B7E85;">' +
            '<i class="fas fa-search" style="font-size:50px;color:#F0E2C0;margin-bottom:20px;display:block;"></i>' +
            '<h3 style="font-family:Playfair Display,serif;color:#4A1428;">No products found</h3>' +
            '<p>Try a different category or search term.</p></div>';
        return;
    }
    
    var html = '';
    for (var i = 0; i < toShow.length; i++) {
        html += createProductCard(toShow[i]);
    }
    grid.innerHTML = html;
    
    var loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = filtered.length > productsDisplayed ? 'inline-flex' : 'none';
    }
}

// ============================================
// CREATE PRODUCT CARD
// ============================================
function createProductCard(product) {
    var isWishlisted = wishlist.indexOf(product.id) !== -1;
    var stars = getStarHTML(product.rating);
    var badgeHTML = '';
    if (product.badge) {
        var badgeText = product.badge === 'sale' ? 'SALE' : (product.badge === 'new' ? 'NEW' : 'HOT');
        badgeHTML = '<span class="product-badge badge-' + product.badge + '">' + badgeText + '</span>';
    }
    var oldPriceHTML = product.oldPrice ? '<span class="product-old-price">' + product.oldPrice + ' ETB</span>' : '';
 var stockHTML = product.inStock ? 
        '<div class="product-stock"><i class="fas fa-check-circle"></i> In Stock</div>' :
        '<div class="product-stock out"><i class="fas fa-times-circle"></i> Out of Stock</div>';
    
    return '<div class="product-card">' +
        '<div class="product-image-wrapper">' +
            '<img src="' + product.image + '" alt="' + product.name + '" class="product-image" ' +
                'onerror="this.src=\'img/02_makeup_collection.jpg\'" onclick="openQuickView(' + product.id + ')" style="cursor:pointer;">' +
            '<div class="product-badges">' + badgeHTML + '</div>' +
            '<div class="product-actions-overlay">' +
                '<button class="action-icon ' + (isWishlisted ? 'active' : '') + '" onclick="toggleWishlistItem(' + product.id + ')" title="Wishlist"><i class="fas fa-heart"></i></button>' +
                '<button class="action-icon" onclick="openQuickView(' + product.id + ')" title="Quick View"><i class="fas fa-eye"></i></button>' +
            '</div>' +
        '</div>' +
        '<div class="product-info">' +
            '<span class="product-category-label">' + getCategoryLabel(product.category) + '</span>' +
            '<h3 class="product-name" onclick="openQuickView(' + product.id + ')" style="cursor:pointer;">' + product.name + '</h3>' +
            '<div class="product-rating">' + stars + '<span class="count">(' + product.reviews + ')</span></div>' +
            '<p class="product-description">' + product.description + '</p>' +
            '<div class="product-price-row">' +
                '<span class="product-price">' + product.price + ' ETB</span>' + oldPriceHTML +
            '</div>' +
            stockHTML +
            '<button class="add-to-cart-btn" onclick="addToCart(' + product.id + ')"' + (!product.inStock ? ' disabled' : '') + '>' +
                '<i class="fas fa-shopping-bag"></i> ' + (product.inStock ? 'Add to Cart' : 'Out of Stock') +
            '</button>' +
        '</div>' +
    '</div>';
}

// ============================================
// HELPERS
// ============================================
function getCategoryLabel(cat) {
    var labels = {
        'makeup': 'Makeup', 'skincare': 'Skincare', 'perfume': 'Perfume',
        'body': 'Body Care', 'lipsticks': 'Lipsticks', 'nail': 'Nail Polish',
        'eye': 'Eye Makeup', 'blush': 'Blush & Powder', 'mask': 'Facial Mask',
        'lipgloss': 'Lip Gloss', 'serum': 'Serum', 'lotion': 'Body Lotion',
        'accessories': 'Accessories', 'sunscreen': 'Sunscreen',
        'mascara': 'Mascara', 'brushes': 'Brushes & Tools'
    };
    return labels[cat] || cat;
}

function getStarHTML(rating) {
    var stars = '';
    for (var i = 1; i <= 5; i++) {
        if (i <= rating) stars += '<i class="fas fa-star"></i>';
        else if (i - 0.5 <= rating) stars += '<i class="fas fa-star-half-alt"></i>';
        else stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// ============================================
// SORT
// ============================================
function sortProductsList(list, sort) {
    var sorted = list.slice();
    if (sort === 'price-low') sorted.sort(function(a,b){ return a.price - b.price; });
    else if (sort === 'price-high') sorted.sort(function(a,b){ return b.price - a.price; });
    else if (sort === 'name') sorted.sort(function(a,b){ return a.name.localeCompare(b.name); });
    else if (sort === 'rating') sorted.sort(function(a,b){ return b.rating - a.rating; });
    else sorted.sort(function(a,b){ return (b.featured?1:0) - (a.featured?1:0); });
    return sorted;
}

function sortProducts() {
    var sel = document.getElementById('sortSelect');
    if (!sel) return;
    currentSort = sel.value;
    displayProducts(currentFilter, currentSort);
}

function filterProducts(category, btn) {
    currentFilter = category;
    productsDisplayed = 12;
    if (btn) {
        var btns = document.querySelectorAll('.filter-btn');
        for (var i = 0; i < btns.length; i++) btns[i].classList.remove('active');
        btn.classList.add('active');
    }
    displayProducts(category, currentSort);
    var productsSection = document.getElementById('products');
    if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// LIVE SEARCH
// ============================================
function liveSearch() {
    var input = document.getElementById('searchInput');
    if (!input) return;
    var query = input.value.toLowerCase().trim();
    var searchInfo = document.getElementById('searchInfo');
    
    if (!query) {
        if (searchInfo) searchInfo.style.display = 'none';
        displayProducts(currentFilter, currentSort);
        return;
    }
    
    var results = PRODUCTS.filter(function(p) {
        return p.name.toLowerCase().indexOf(query) !== -1 ||
               p.description.toLowerCase().indexOf(query) !== -1 ||
               p.category.toLowerCase().indexOf(query) !== -1;
    });
    
    var grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    if (results.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#8B7E85;">' +
            '<i class="fas fa-search" style="font-size:50px;color:#F0E2C0;margin-bottom:20px;display:block;"></i>' +
            '<h3 style="font-family:Playfair Display,serif;color:#4A1428;">No results for "' + query + '"</h3>' +
            '<p>Try different keywords.</p></div>';
    } else {
        var html = '';
        for (var i = 0; i < results.length; i++) html += createProductCard(results[i]);
        grid.innerHTML = html;
    }
    
    if (searchInfo) {
        searchInfo.style.display = 'block';
        searchInfo.innerHTML = 'Found <strong>' + results.length + '</strong> product(s) for "<strong>' + query + '</strong>"';
    }
}

function clearSearch() {
    var input = document.getElementById('searchInput');
    if (input) input.value = '';
    var info = document.getElementById('searchInfo');
    if (info) info.style.display = 'none';
    displayProducts(currentFilter, currentSort);
}

// ============================================
// LOAD MORE
// ============================================
function loadMoreProducts() {
    productsDisplayed += 12;
    displayProducts(currentFilter, currentSort);
}

// ============================================
// CART
// ============================================
function addToCart(id) {
    var product = null;
    for (var i = 0; i < PRODUCTS.length; i++) {
        if (PRODUCTS[i].id === id) { product = PRODUCTS[i]; break; }
    }
    if (!product) return;
    
    var existing = null;
    for (var j = 0; j < cart.length; j++) {
        if (cart[j].id === id) { existing = cart[j]; break; }
    }
    
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: product.id, name: product.name, price: product.price,
            image: product.image, qty: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(product.name + ' added to cart!');
}

function removeFromCart(id) {
    cart = cart.filter(function(item) { return item.id !== id; });
    saveCart();
    updateCartUI();
    if (cart.length === 0) toggleCart();
}

function increaseQty(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) { cart[i].qty += 1; break; }
    }
    saveCart();
    updateCartUI();
}

function decreaseQty(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            if (cart[i].qty > 1) cart[i].qty -= 1;
            else { removeFromCart(id); return; }
            break;
        }
    }
    saveCart();
    updateCartUI();
}
 function saveCart() {
    localStorage.setItem('yusriCart', JSON.stringify(cart));
}

function updateCartUI() {
    var cartCount = document.getElementById('cartCount');
    var cartItems = document.getElementById('cartItems');
    var cartSubtotal = document.getElementById('cartSubtotal');
    var cartDelivery = document.getElementById('cartDelivery');
    var cartTotal = document.getElementById('cartTotal');
    var cartFooter = document.getElementById('cartFooter');
    
    var totalItems = 0;
    for (var i = 0; i < cart.length; i++) totalItems += cart[i].qty;
    if (cartCount) cartCount.textContent = totalItems;
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">' +
            '<i class="fas fa-shopping-bag"></i>' +
            '<p>Your cart is empty</p>' +
            '<button class="btn-gold" onclick="toggleCart();scrollToProducts();" style="margin-top:15px;">' +
            '<i class="fas fa-shopping-bag"></i> Start Shopping</button></div>';
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }
    
    if (cartFooter) cartFooter.style.display = 'block';
    
    var html = '';
    for (var k = 0; k < cart.length; k++) {
        var item = cart[k];
        html += '<div class="cart-item">' +
            '<img src="' + item.image + '" alt="' + item.name + '" class="cart-item-image" onerror="this.src=\'img/02_makeup_collection.jpg\'">' +
            '<div class="cart-item-details">' +
                '<h4 class="cart-item-name">' + item.name + '</h4>' +
                '<p class="cart-item-price">' + item.price + ' ETB</p>' +
                '<div class="cart-item-controls">' +
                    '<button class="qty-btn" onclick="decreaseQty(' + item.id + ')">&minus;</button>' +
                    '<span class="qty-value">' + item.qty + '</span>' +
                    '<button class="qty-btn" onclick="increaseQty(' + item.id + ')">+</button>' +
                    '<button class="remove-item" onclick="removeFromCart(' + item.id + ')" style="margin-left:auto;"><i class="fas fa-trash"></i></button>' +
                '</div>' +
            '</div>' +
        '</div>';
    }
    cartItems.innerHTML = html;
    
    var subtotal = 0;
    for (var m = 0; m < cart.length; m++) subtotal += cart[m].price * cart[m].qty;
    var delivery = 100;
    var total = subtotal + delivery;
    
    if (cartSubtotal) cartSubtotal.textContent = subtotal.toLocaleString() + ' ETB';
    if (cartDelivery) cartDelivery.textContent = delivery + ' ETB';
    if (cartTotal) cartTotal.textContent = total.toLocaleString() + ' ETB';
}

function toggleCart() {
    var drawer = document.getElementById('cartDrawer');
    var wishlistPanel = document.getElementById('wishlistPanel');
    if (wishlistPanel) wishlistPanel.classList.remove('open');
    if (drawer) drawer.classList.toggle('open');
}

function scrollToProducts() {
    var products = document.getElementById('products');
    if (products) products.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// WISHLIST
// ============================================
function toggleWishlistItem(id) {
    var product = null;
    for (var i = 0; i < PRODUCTS.length; i++) {
        if (PRODUCTS[i].id === id) { product = PRODUCTS[i]; break; }
    }
    if (!product) return;
    
    var index = wishlist.indexOf(id);
    if (index !== -1) {
        wishlist.splice(index, 1);
        showToast(product.name + ' removed from wishlist');
    } else {
        wishlist.push(id);
        showToast(product.name + ' added to wishlist!');
    }
    
    localStorage.setItem('yusriWishlist', JSON.stringify(wishlist));
    displayProducts(currentFilter, currentSort);
    updateWishlistCount();
    updateWishlistPanel();
}

function updateWishlistCount() {
    var count = document.getElementById('wishlistCount');
    if (count) count.textContent = wishlist.length;
}
 function toggleWishlistPanel() {
    var panel = document.getElementById('wishlistPanel');
    var cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (panel) panel.classList.toggle('open');
    updateWishlistPanel();
}

function updateWishlistPanel() {
    var container = document.getElementById('wishlistItems');
    if (!container) return;
    
    if (wishlist.length === 0) {
        container.innerHTML = '<div class="empty-cart">' +
            '<i class="fas fa-heart" style="color:#D4838F;"></i>' +
            '<p>Your wishlist is empty</p>' +
            '<p style="font-size:12px;">Save your favorite items here.</p></div>';
        return;
    }
    
    var items = PRODUCTS.filter(function(p) { return wishlist.indexOf(p.id) !== -1; });
    var html = '';
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        html += '<div class="cart-item">' +
            '<img src="' + item.image + '" alt="' + item.name + '" class="cart-item-image" onerror="this.src=\'img/02_makeup_collection.jpg\'">' +
            '<div class="cart-item-details">' +
                '<h4 class="cart-item-name">' + item.name + '</h4>' +
                '<p class="cart-item-price">' + item.price + ' ETB</p>' +
                '<div class="cart-item-controls">' +
                    '<button class="add-to-cart-btn" onclick="addToCart(' + item.id + ')" style="padding:8px 12px;font-size:11px;"><i class="fas fa-shopping-bag"></i> Add</button>' +
                    '<button class="remove-item" onclick="toggleWishlistItem(' + item.id + ')" style="margin-left:auto;"><i class="fas fa-trash"></i></button>' +
                '</div>' +
            '</div>' +
        '</div>';
    }
    container.innerHTML = html;
}

// ============================================
// QUICK VIEW
// ============================================
function openQuickView(id) {
    var product = null;
    for (var i = 0; i < PRODUCTS.length; i++) {
        if (PRODUCTS[i].id === id) { product = PRODUCTS[i]; break; }
    }
    if (!product) return;
    
    var content = document.getElementById('quickViewContent');
    var modal = document.getElementById('quickViewModal');
    if (!content || !modal) return;
    
    var isWishlisted = wishlist.indexOf(product.id) !== -1;
    var stars = getStarHTML(product.rating);
    var oldPriceHTML = product.oldPrice ? '<span class="product-old-price">' + product.oldPrice + ' ETB</span>' : '';
    
    content.innerHTML = '<div class="quick-content">' +
        '<div class="qimg"><img src="' + product.image + '" alt="' + product.name + '" onerror="this.src=\'img/02_makeup_collection.jpg\'"></div>' +
        '<div class="qinfo">' +
            '<span class="product-category-label">' + getCategoryLabel(product.category) + '</span>' +
            '<h2 class="product-name">' + product.name + '</h2>' +
            '<div class="product-rating">' + stars + '<span class="count">(' + product.reviews + ' reviews)</span></div>' +
            '<div class="product-price-row"><span class="product-price">' + product.price + ' ETB</span>' + oldPriceHTML + '</div>' +
            '<p class="product-description">' + product.description + '</p>' +
            '<div class="quick-actions">' +
                '<button class="add-to-cart-btn" onclick="addToCart(' + product.id + ');closeQuickView();"><i class="fas fa-shopping-bag"></i> Add to Cart</button>' +
                '<button class="action-icon ' + (isWishlisted ? 'active' : '') + '" onclick="toggleWishlistItem(' + product.id + ')"><i class="fas fa-heart"></i></button>' +
            '</div>' +
        '</div>' +
    '</div>';
    
    modal.classList.add('open');
}

function closeQuickView() {
    var modal = document.getElementById('quickViewModal');
    if (modal) modal.classList.remove('open');
}

function openCheckout() {
    if (cart.length === 0) { showToast('Your cart is empty!'); return; }
    updateCheckoutSummary();
    var modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.add('open');
}

function closeCheckout() {
    var modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.remove('open');
}

function updateCheckoutSummary() {
    var summary = document.getElementById('checkoutSummary');
    var totalEl = document.getElementById('checkoutTotal');
    var deliverySelect = document.getElementById('deliveryOption');
    if (!summary) return;
    
    var subtotal = 0;
    for (var i = 0; i < cart.length; i++) subtotal += cart[i].price * cart[i].qty;
    var deliveryFee = deliverySelect ? parseInt(deliverySelect.value) : 100;
    var total = subtotal + deliveryFee;
    
    var html = '';
    for (var k = 0; k < cart.length; k++) {
        html += '<div class="summary-item"><span>' + cart[k].name + ' x' + cart[k].qty + '</span>' +
            '<span>' + (cart[k].price * cart[k].qty).toLocaleString() + ' ETB</span></div>';
    }
    html += '<div class="summary-item" style="border-top:1px solid #F0E2C0;margin-top:10px;padding-top:10px;">' +
        '<span>Delivery</span><span>' + deliveryFee + ' ETB</span></div>';
    summary.innerHTML = html;
    
    if (totalEl) totalEl.textContent = total.toLocaleString() + ' ETB';
}

function updateCheckoutTotal() {
    updateCheckoutSummary();
}

// ============================================
// SUBMIT ORDER TO TELEGRAM
// ============================================
function submitOrder(event) {
    event.preventDefault();
    
    var name = document.getElementById('customerName').value.trim();
    var phone = document.getElementById('customerPhone').value.trim();
    var emailEl = document.getElementById('customerEmail');
    var email = emailEl ? emailEl.value.trim() : '';
    var city = document.getElementById('customerCity').value.trim();
    var subcityEl = document.getElementById('customerSubcity');
    var subcity = subcityEl ? subcityEl.value.trim() : '';
    var address = document.getElementById('customerAddress').value.trim();
    var delivery = document.getElementById('deliveryOption').value;
    var paymentRadio = document.querySelector('input[name="payment"]:checked');
    var payment = paymentRadio ? paymentRadio.value : 'Telebirr';
    var transactionId = document.getElementById('transactionId').value.trim();
    var paymentConfirmed = document.getElementById('paymentConfirmed').checked;
    
    if (!name || !phone || !city || !address) { showToast('Please fill in all required fields'); return; }
    if (!transactionId) { showToast('Please enter the Transaction ID'); return; }
    if (!paymentConfirmed) { showToast('Please confirm you have sent the payment'); return; }
    
    var deliveryFee = parseInt(delivery);
    var subtotal = 0;
    for (var i = 0; i < cart.length; i++) subtotal += cart[i].price * cart[i].qty;
    var total = subtotal + deliveryFee;
    
    var message = '🛍️ *NEW ORDER — YUSRI BEAUTY*\n';
    message += '━━━━━━━━━━━━━━━━━━━━\n\n';
    message += '👤 *CUSTOMER INFO*\n';
    message += 'Name: ' + name + '\n';
    message += '📱 Phone: ' + phone + '\n';
    if (email) message += '📧 Email: ' + email + '\n';
    message += '\n📍 *DELIVERY INFO*\n';
    message += 'City: ' + city + '\n';
    if (subcity) message += 'Sub-city: ' + subcity + '\n';
    message += 'Address: ' + address + '\n\n';
    message += '📦 *ORDER DETAILS*\n';
    for (var k = 0; k < cart.length; k++) {
        message += '• ' + cart[k].name + '\n';
        message += '   ' + cart[k].qty + ' x ' + cart[k].price + ' ETB = ' + (cart[k].qty * cart[k].price).toLocaleString() + ' ETB\n';
 }
    message += '\n💰 *PAYMENT SUMMARY*\n';
    message += 'Subtotal: ' + subtotal.toLocaleString() + ' ETB\n';
    message += 'Delivery: ' + deliveryFee + ' ETB\n';
    message += '💳 Payment Method: ' + payment + '\n';
    message += '🧾 Transaction ID: ' + transactionId + '\n';
    message += '✅ Payment Confirmed: Yes\n\n';
    message += '💵 *TOTAL: ' + total.toLocaleString() + ' ETB*\n\n';
    message += '━━━━━━━━━━━━━━━━━━━━\n';
    message += '⚠️ *VERIFY PAYMENT*\n';
    message += 'Open Telebirr/CBE app and confirm ' + total.toLocaleString() + ' ETB arrived.\n';
    message += 'Only then arrange delivery.\n\n';
    message += 'Thank you! 💕';
    
    var submitBtn = document.getElementById('submitOrderBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Order...';
    
    fetch(TELEGRAM_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown'
        })
    })
    .then(function(response) { return response.json(); })
    .then(function(data) {
        if (data.ok) {
            showToast('Order sent! We will contact you. 💕');
            cart = [];
            saveCart();
            updateCartUI();
            setTimeout(function() {
                closeCheckout();
                toggleCart();
                document.getElementById('checkoutForm').reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Order via Telegram';
            }, 1000);
        } else {
            throw new Error(data.description || 'Failed');
        }
    })
    .catch(function(error) {
        console.error('Order error:', error);
        showToast('Error sending order. Please contact us on Telegram.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Order via Telegram';
    });
}

// ============================================
// COPY TO CLIPBOARD
// ============================================
function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showToast('Copied: ' + text);
        }).catch(function() {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand('copy');
        showToast('Copied: ' + text);
    } catch (err) {
        showToast('Could not copy. Please copy manually.');
    }
    document.body.removeChild(input);
}

// ============================================
// REVIEWS
// ============================================
function loadReviews() {
    if (reviews.length === 0) {
        reviews = DEFAULT_REVIEWS.slice();
        localStorage.setItem('yusriReviews', JSON.stringify(reviews));
    }
    renderReviews();
}

function renderReviews() {
    var container = document.getElementById('reviewsContainer');
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < Math.min(6, reviews.length); i++) {
        var review = reviews[i];
        var initial = review.name.charAt(0).toUpperCase();
        html += '<div class="review-card">' +
            '<div class="review-stars">' + getStarHTML(review.rating) + '</div>' +
            '<p class="review-text">"' + review.text + '"</p>' +
            '<div class="review-author">' +
                '<div class="review-avatar">' + initial + '</div>' +
                '<div><div class="review-name">' + review.name + '</div>' +
                '<div class="review-date">' + review.date + '</div></div>' +
            '</div>' +
        '</div>';
    }
    container.innerHTML = html;
}
 function setRating(rating) {
    currentRating = rating;
    var stars = document.querySelectorAll('#starRating i');
    for (var i = 0; i < stars.length; i++) {
        if (i < rating) stars[i].className = 'fas fa-star';
        else stars[i].className = 'far fa-star';
    }
}

function submitReview(event) {
    event.preventDefault();
    var name = document.getElementById('reviewName').value.trim();
    var text = document.getElementById('reviewText').value.trim();
    if (!name || !text) { showToast('Please fill in all fields'); return; }
    
    reviews.unshift({ name: name, rating: currentRating, text: text, date: 'Just now' });
    localStorage.setItem('yusriReviews', JSON.stringify(reviews));
    renderReviews();
    document.getElementById('reviewForm').reset();
    setRating(5);
    showToast('Thank you for your review! 💕');
}

// ============================================
// NEWSLETTER
// ============================================
function subscribeNewsletter(event) {
    event.preventDefault();
    var email = document.getElementById('newsletterEmail').value;
    if (!email) return;
    
    var message = '📬 *NEW NEWSLETTER SUBSCRIBER*\n\n📧 Email: ' + email + '\n\nSomeone joined YUSRI BEAUTY newsletter!';
    
    fetch(TELEGRAM_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message, parse_mode: 'Markdown' })
    }).catch(function(err) { console.log('Newsletter error:', err); });
    
    document.getElementById('newsletterEmail').value = '';
    showToast('Thank you for subscribing! 💌');
}

// ============================================
// CONTACT FORM
// ============================================
function sendContactMessage(event) {
    event.preventDefault();
    var name = document.getElementById('contactName').value;
    var email = document.getElementById('contactEmail').value;
    var phone = document.getElementById('contactPhone').value;
    var msg = document.getElementById('contactMessage').value;
    
    var telegramMsg = '📩 *NEW CONTACT MESSAGE*\n\n👤 Name: ' + name + '\n📧 Email: ' + email + '\n📱 Phone: ' + phone + '\n\n💬 Message:\n' + msg;
    
    fetch(TELEGRAM_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: telegramMsg, parse_mode: 'Markdown' })
    }).then(function() {
        showToast('Message sent! We will reply soon. 💕');
        document.getElementById('contactName').value = '';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactPhone').value = '';
        document.getElementById('contactMessage').value = '';
    }).catch(function() {
        showToast('Message sent! We will reply soon.');
    });
}

// ============================================
// TOAST
// ============================================
var toastTimeout;
function showToast(message) {
    var toast = document.getElementById('toast');
    var msgEl = document.getElementById('toastMessage');
    if (!toast || !msgEl) return;
    msgEl.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function() { toast.classList.remove('show'); }, 3000);
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('active');
}

// ============================================
// SCROLL EFFECTS
// ============================================
function setupScrollEffects() {
    if (!('IntersectionObserver' in window)) return;
    var observer = new IntersectionObserver(function(entries) {
 entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    
    var els = document.querySelectorAll('.cat-card, .product-card, .step, .review-card, .contact-item');
    for (var i = 0; i < els.length; i++) {
        els[i].classList.add('fade-in');
        observer.observe(els[i]);
    }
}

function setupScrollListeners() {
    window.addEventListener('scroll', function() {
        var backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.scrollY > 500) backToTop.classList.add('show');
            else backToTop.classList.remove('show');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// MODAL OUTSIDE CLICK + ESC KEY
// ============================================
document.addEventListener('click', function(e) {
    var checkoutModal = document.getElementById('checkoutModal');
    var quickViewModal = document.getElementById('quickViewModal');
    if (e.target === checkoutModal) closeCheckout();
    if (e.target === quickViewModal) closeQuickView();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCheckout();
        closeQuickView();
        var cartDrawer = document.getElementById('cartDrawer');
        var wishlistPanel = document.getElementById('wishlistPanel');
        if (cartDrawer) cartDrawer.classList.remove('open');
        if (wishlistPanel) wishlistPanel.classList.remove('open');
    }
});