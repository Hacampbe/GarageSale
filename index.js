const shoppingCart = [];

const recordsButton = document.getElementById("add-records")
const gameboyButton = document.getElementById("add-gameboy")
const pepsiButton = document.getElementById("add-pepsi")
const starwarsButton = document.getElementById("add-starwars")
const carButton = document.getElementById("add-car")
const flamingoButton = document.getElementById("add-flamingo")

const checkoutButton = document.getElementById("checkout")

function addToCart() {
  checkoutButton.innerHTML = `Checkout (${shoppingCart.length})`;
}

function recordsClick() {
    console.log("clicked records")
    shoppingCart.push([20, "add-records", "Records"])
    addToCart()
}

recordsButton.addEventListener("click", recordsClick)

function gameboyClick() {
    console.log("clicked gameboy")
    shoppingCart.push([200, "add-gameboy", "Gameboy"])
    addToCart();
}

gameboyButton.addEventListener("click", gameboyClick)

function pepsiClick() {
    console.log("clicked pepsi")
    shoppingCart.push([1, "add-pepsi", "Pepsi"])
    addToCart();
}

pepsiButton.addEventListener("click", pepsiClick)

function starwarsClick() {
    console.log("clicked starwars")
    shoppingCart.push([50, "add-starwars", "starwars"])
    addToCart();
}

starwarsButton.addEventListener("click", starwarsClick)

function carClick() {
    console.log("clicked car")
    shoppingCart.push([5000 , "add-car", "car"])
    addToCart();
}

carButton.addEventListener("click", carClick)

function flamingoClick() {
    console.log("clicked flamingo")
    shoppingCart.push([5, "add-flamingo", "flamingo"])
    addToCart();
}

flamingoButton.addEventListener("click", flamingoClick)

function checkoutClick() {
    console.log("checkout clicked")
    console.log(shoppingCart)
    let price = 0;
    shoppingCart.forEach(item => price += item[0])
    console.log('This is the price', price)
}

checkoutButton.addEventListener("click", checkoutClick)

