
    //api
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
    
    function toggleDropdown() {
        document.getElementById('dropdown').classList.toggle('open');
    }

    document.addEventListener('click', function(e) {
        const btn = document.getElementById('user-btn');
        const dropdown = document.getElementById('dropdown');
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });

    //for flash sales
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .then(data => renderFlashSales(data))

function renderFlashSales(products) {
    const container = document.getElementById('flash-sales-container');
    container.innerHTML = '';

    products.forEach(product => {
        // عشان نعمل discount عشوائي زي الـ Figma
        const discount = Math.floor(Math.random() * 40) + 10;
        const oldPrice = (product.price * 1.3).toFixed(2);

        // عشان نعمل نجوم
        const stars = Math.round(product.rating.rate);
        const starsHTML = '★'.repeat(stars) + '☆'.repeat(5 - stars);

        container.innerHTML += `
            <div class="product-card">
                <div class="product-img-wrapper">
                    <span class="discount-badge">-${discount}%</span>
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-actions">
                        <button class="wishlist-btn">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <button class="view-btn">
                            <i class="fa-regular fa-eye"></i>
                        </button>
                    </div>
                    <button class="add-to-cart-btn">Add To Cart</button>
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <div class="product-price">
                        <span class="new-price">$${product.price}</span>
                        <span class="old-price">$${oldPrice}</span>
                    </div>
                    <div class="product-rating">
                        <span class="stars">${starsHTML}</span>
                        <span class="reviews">(${product.rating.count})</span>
                    </div>
                </div>
            </div>
        `
    });
}
// flash sales end time
const saleEndDate = new Date();
saleEndDate.setDate(saleEndDate.getDate() + 3);  

function updateTimer() {
    const now = new Date();
    const diff = saleEndDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);