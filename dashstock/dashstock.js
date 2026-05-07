function displayWishlist() {
    const tableBody = document.getElementById('wishlist-table-body');
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    tableBody.innerHTML = ""; 

    wishlist.forEach(product => {
        tableBody.innerHTML += `
            <tr>
                <td><img src="${product.image}" width="50" style="border-radius:5px;"></td>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>$${product["pre-price"]}</td>
                <td>
                    <button onclick="removeProduct(${product.id})" style="color:red; border:none; background:none; cursor:pointer;">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            </tr>
        `;
    });
}

function removeProduct(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
}

document.addEventListener('DOMContentLoaded', displayWishlist);

