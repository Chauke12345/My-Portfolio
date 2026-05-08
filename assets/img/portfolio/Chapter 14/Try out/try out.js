// listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */

function placeOrder() {
    // get form values
    var numBeverages = document.getElementById("numBeverages").value;
    var typeBeverage = document.getElementById("typeBeverage").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var over18 = document.getElementById("over18").value;

    // get the beverage price
    var orderPrice = calculatePrice(numBeverages, typeBeverage);
    // get the delivery price
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, over18);

    // create the output
    var theOutput = "<p>Thank you for your order.</p>";

    // output the delivery price, if there is one
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice;
    }
    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);

    // display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * calculates Beverages price
 */
function calculatePrice(numBeverages, _typeBeverage) {

    var orderPrice = Number(numBeverages) * 10;
    var extraCharge = 0;

    // calculate extraCharge, if there is one
    if (_typeBeverage === "supreme") {
        extraCharge = Number(numBeverages) * 2;
    }
    orderPrice += extraCharge;
    return orderPrice;
}
/**
  * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, over18) {

    var deliveryPrice = 0;

    // calculate delivery price, if there is one
    if (((deliveryCity === "Midrand") && (orderPrice >
        10)) || (over18 === "yes")) {
        deliveryPrice = 5;
    } else {
        deliveryPrice = 5;
    }
    return deliveryPrice;
    
    
}

// // Listing 14 - 1
// var language = prompt("What would you  like to have?");

// if (language === "Beverage") {
//     alert("Great! Let's order a beverage!");
// } else {
//     alert("I don't know what you're saying.");
// }

// // Listing 14 - 2
// var language = prompt("What language do you speak?");

// if (language === "English") {
//  alert("Great! Let's talk English!");
//  var speaksJavaScript = true;
// } else {
//  alert("I don't know what you're saying.");
// }

// if (speaksJavaScript) {
//  alert("It's great to meet you.");
// }

