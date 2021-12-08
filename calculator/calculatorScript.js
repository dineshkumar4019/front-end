const numbers = document.querySelectorAll("button");
const display = document.querySelector(".keys");

numbers.forEach(function (number) {
    number.addEventListener("click", function() {
        const currentValue = number.innerHTML;
        if (currentValue === "=") {
            if (display.innerHTML !== "") {
                console.log(currentValue);
                display.innerHTML = eval(display.innerHTML);
            }
        } else if (currentValue === "C") {
            display.innerHTML = "";
        } else {
            display.innerHTML += currentValue;
        }
    });
});