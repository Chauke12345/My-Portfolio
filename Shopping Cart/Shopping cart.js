const menuItems = [
    { id: 1, name: "Pizza", price: 100, quantity: 0 },
    { id: 2, name: "Shawarma", price: 80.50, quantity: 0 },
    { id: 3, name: "Chicken Wings", price: 150, quantity: 0 },
    { id: 4, name: "Soda", price: 15, quantity: 0 },
    { id: 5, name: "Steak", price: 200, quantity: 0 }
];

function addToCart(index) {
    menuItems[index].quantity++;
    renderCart();
}

function removeFromCart(index) {
    if (menuItems[index].quantity > 0) {
        menuItems[index].quantity--;
        renderCart();
    }
}

function getTotal() {
    return menuItems.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );
}

function checkout() {
    const total = getTotal();

    document.getElementById("checkoutTotal").innerHTML = `
        <div class="alert alert-success mt-4">
            <h4 class="mb-0">
                Total Amount: <strong>R${total.toFixed(2)}</strong>
            </h4>
        </div>
    `;
}

function renderCart() {
    let html = `
        <div class="table-responsive">
            <table class="table table-dark table-hover align-middle text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Add</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
    `;

    menuItems.forEach((item, index) => {
        const total = item.price * item.quantity;

        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>R${item.price.toFixed(2)}</td>
                <td>
                    <span class="badge bg-primary fs-6">
                        ${item.quantity}
                    </span>
                </td>
                <td>R${total.toFixed(2)}</td>
                <td>
                    <button class="btn btn-success btn-sm"
                            onclick="addToCart(${index})">
                        +
                    </button>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm"
                            onclick="removeFromCart(${index})">
                        −
                    </button>
                </td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
        <script>
  function goBack() {
    window.location.href = "/index.html";
  }
</script>

        <div class="text-end mt-4">
            <h3>
                Grand Total:
                <span class="text-success">
                    R${getTotal().toFixed(2)}
                </span>
            </h3>
        </div>
    `;

    document.getElementById("demo").innerHTML = html;
}

window.onload = renderCart;