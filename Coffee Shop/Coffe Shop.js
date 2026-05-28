// Modern Coffee Shop Ordering System

document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.getElementById("placeOrder");
    const backButton = document.getElementById("backButton");

    orderButton.addEventListener("click", placeOrder);

    // Back Button Functionality
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.history.back();
        });
    }

    welcomeCustomer();
});

/**
 * Display welcome message
 */
function welcomeCustomer() {
    const response = prompt("Would you like some coffee?");

    if (response && response.toLowerCase() === "yes") {
        alert("Great! Let's prepare your perfect cup ☕");
    } else {
        alert("No worries! Come back anytime.");
    }
}

/**
 * Handle order placement
 */
function placeOrder() {
    const quantity = parseInt(document.getElementById("numCoffee").value);
    const beverage = document.getElementById("typeCoffee").value;
    const city = document.getElementById("deliveryCity").value;
    const extras = document.getElementById("milkAndSugar").value;

    if (!quantity || quantity <= 0) {
        displayMessage("Please enter a valid quantity.", "error");
        return;
    }

    const orderPrice = calculatePrice(quantity, beverage);
    const deliveryPrice = calculateDelivery(orderPrice, city);
    const total = orderPrice + deliveryPrice;

    displayOrderSummary({
        quantity,
        beverage,
        city,
        extras,
        orderPrice,
        deliveryPrice,
        total
    });
}

/**
 * Calculate beverage price
 */
function calculatePrice(quantity, beverage) {
    const prices = {
        Coffee: 25,
        Tea: 20,
        Americano: 30,
        Espresso: 35
    };

    return quantity * (prices[beverage] || 25);
}

/**
 * Calculate delivery cost
 */
function calculateDelivery(orderPrice, city) {
    const freeDeliveryAreas = ["Midrand", "Fourways"];

    return (orderPrice >= 150 || freeDeliveryAreas.includes(city))
        ? 0
        : 30;
}

/**
 * Display order summary
 */
function displayOrderSummary(order) {
    const output = `
        <div class="receipt">
            <h2>☕ Order Confirmed!</h2>
            <p><strong>Drink:</strong> ${order.quantity} × ${order.beverage}</p>
            <p><strong>Delivery Area:</strong> ${order.city}</p>
            <p><strong>Milk & Sugar:</strong> ${order.extras}</p>
            <hr>
            <p><strong>Order Total:</strong> R${order.orderPrice}</p>
            <p><strong>Delivery Fee:</strong> ${
                order.deliveryPrice === 0
                    ? "FREE 🚚"
                    : `R${order.deliveryPrice}`
            }</p>
            <h3>Total: R${order.total}</h3>
        </div>
    `;

    document.getElementById("displayTotal").innerHTML = output;
}

/**
 * Display messages
 */
function displayMessage(message, type = "info") {
    document.getElementById("displayTotal").innerHTML = `
        <div class="${type}">
            ${message}
        </div>
    `;
}