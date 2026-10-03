const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake";
console.log(featuredDrink);

function addBurger() {
    const newBurger = "Flatburger";
    burgers.push(newBurger);
}

if(true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
}
console.log(burgers, addAnotherBurger);

function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";
}
