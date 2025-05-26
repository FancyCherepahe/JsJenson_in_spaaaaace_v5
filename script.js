let droneBuyButtons = document.querySelectorAll(".drone_choose_buy");
droneBuyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Sorry, this feature is not available yet.");
    });
});
function droneBuyButtonsMouseOver(drone_choose_buy) {
    drone_choose_buy.style.backgroundColor = "aqua";
}
function droneBuyButtonsMouseOut(drone_choose_buy) {
    drone_choose_buy.style.backgroundColor = "white";
}
droneBuyButtons.forEach(button => {
    button.addEventListener("mouseover", () => droneBuyButtonsMouseOver(button));
    button.addEventListener("mouseout", () => droneBuyButtonsMouseOut(button));
});
