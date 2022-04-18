const shoppingCart = [];

const recordsButton = document.getElementById("add-records")
const gameboyButton = document.getElementById("add-gameboy")
const pepsiButton = document.getElementById("add-pepsi")
const starwarsButton = document.getElementById("add-starwars")
const carButton = document.getElementById("add-car")
const flamingoButton = document.getElementById("add-flamingo")

const checkoutButton = document.getElementById("checkout")

function recordsClick() {
    console.log("clicked records")
    shoppingCart.push([20, "add-records", "Records"])
}

recordsButton.addEventListener("click", recordsClick)

function gameboyClick() {
    console.log("clicked gameboy")
    shoppingCart.push([200, "add-gameboy", "Gameboy"])
}

gameboyButton.addEventListener("click", gameboyClick)

function checkoutClick() {
    console.log("checkout clicked")
    console.log(shoppingCart)
    let price = 0;
    shoppingCart.forEach(item => price += item[0])
    console.log('this is the price', price)
}

checkoutButton.addEventListener("click", checkoutClick)