// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cart = document.getElementById("cart");
    const total = document.getElementById("total");

    // Sample cart items
    const items = [
        { name: "Item 1", price: 10, quantity: 1, liked: false },
        { name: "Item 2", price: 15, quantity: 2, liked: true },
        { name: "Item 3", price: 5, quantity: 3, liked: false },
    ];

    function updateCart() {
        cart.innerHTML = ""; // Clear cart

        let totalPrice = 0;

        items.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <div>${item.name}</div>
                <div>
                    <button class="quantity-decrease">-</button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="quantity-increase">+</button>
                </div>
                <div>$${(item.price * item.quantity).toFixed(2)}</div>
                <span class="heart${item.liked ? ' liked' : ''}">❤️</span>
                <button class="delete-item">Delete</button>
            `;

            cart.appendChild(itemDiv);

            totalPrice += item.price * item.quantity;
        });

        total.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

        // Attach event listeners
        const quantityDecreaseButtons = document.querySelectorAll(".quantity-decrease");
        quantityDecreaseButtons.forEach((button, index) => {
            button.addEventListener("click", () => decreaseQuantity(index));
        });

        const quantityIncreaseButtons = document.querySelectorAll(".quantity-increase");
        quantityIncreaseButtons.forEach((button, index) => {
            button.addEventListener("click", () => increaseQuantity(index));
        });

        const heartButtons = document.querySelectorAll(".heart");
        heartButtons.forEach((button, index) => {
            button.addEventListener("click", () => toggleLike(index));
        });

        const deleteButtons = document.querySelectorAll(".delete-item");
        deleteButtons.forEach((button, index) => {
            button.addEventListener("click", () => deleteItem(index));
        });
    }

    function decreaseQuantity(index) {
        if (items[index].quantity > 1) {
            items[index].quantity--;
            updateCart();
        }
    }

    function increaseQuantity(index) {
        items[index].quantity++;
        updateCart();
    }

    function toggleLike(index) {
        items[index].liked = !items[index].liked;
        updateCart();
    }

    function deleteItem(index) {
        items.splice(index, 1);
        updateCart();
    }

    updateCart();
});
