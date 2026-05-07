/*header*/
document.querySelector('.bottom-header').getBoundingClientRect().bottom;
/*container*/

const colorDivs = document.querySelectorAll('.colors div');

colorDivs.forEach(div => {
    div.addEventListener('click', () => {
        colorDivs.forEach(d => {
            d.className = 'color';
        });
        div.className = 'coloractive';  
    });
});


const sizeButtons = document.querySelectorAll('.sizes button');

sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        
        sizeButtons.forEach(b => {
            b.className = 'size';
        });
        btn.className = 'btnactive';
    });
});


const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const numBtn = document.getElementById('num');

let quantity = 1;

plusBtn.addEventListener('click', () => {
    quantity++;
    numBtn.innerText = quantity;
});

minusBtn.addEventListener('click', () => {
    if (quantity > 1) { 
        quantity--;
        numBtn.innerText = quantity;
    }
});
/*relateditems*/
function displayProducts(products) {
    const container = document.getElementById("products-container");
    container.innerHTML = ""; 

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";

        const discount = Math.round(((product["pre-price"] - product.price) / product["pre-price"]) * 100);

        div.innerHTML = `
            <div class="card-top">
                <span class="discount-tag">-${discount}%</span>
                
                <div class="icons">
                
                <button class="icon-btn" onclick='addToWishlist(${JSON.stringify(product)})'>
                 <i class="fa-regular fa-heart"></i></button>
                    <button class="icon-btn"><i class="fa-regular fa-eye"></i></button>
                </div>

                <img src="${product.image}" alt="${product.name}">
                
                <button class="add-to-cart">Add To Cart</button>
            </div>

            <div class="card-bottom">
                <h3>${product.name}</h3>
                
                <p class="price-row">
                    <span class="current-price">$${product.price}</span>
                    <span class="old-price">$${product["pre-price"]}</span>
                </p>

                <div class="rating">
                    <span class="stars"> <i class="fa-solid fa-star" style="color: rgb(255, 183, 14);"></i> <i class="fa-solid fa-star" style="color: rgb(255, 183, 14);"></i> <i class="fa-solid fa-star" style="color: rgb(255, 183, 14);"></i> <i class="fa-solid fa-star" style="color: rgb(255, 183, 14);"></i> <i class="fa-solid fa-star" style="color: rgb(255, 183, 14);"></i></span>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

fetch("data.json")
    .then(response => response.json())
    .then(data => displayProducts(data))
    .catch(error => console.log("Error:", error));


    
    function addToWishlist(product) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.find(item => item.id === product.id)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert("Added to Stock!");
    }
}

