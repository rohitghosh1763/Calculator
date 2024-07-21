const number = document.querySelectorAll(".number");
const allClear = document.querySelector("#AC");
const remove = document.querySelector("#remove");
const display = document.querySelector("#display-value");
const body = document.querySelector("body");
const equal = document.querySelector("#equal");

const reset = () => {
    display.value = ""; // Reset the display value to an empty string
};

const pop = () => {
    display.value = display.value.slice(0, -1); // Remove the last character from the display value
};

for (const num of number) {
    num.addEventListener("click", () => {
        if (display.value !== "Error") {
            display.value += num.value; // Append the clicked number to the display value
        }
    });
}

body.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
        pop(); // Call the pop function when the Backspace key is pressed
    } else if (+e.key in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
        display.value += e.key; // Append the pressed key to the display value if it is a number
    }
});

equal.addEventListener("click", () => {
    if (display.value === "") {
        display.value = ""; // If the display value is empty, do nothing
    } else {
        try {
            display.value = eval(display.value); // Evaluate the display value and set it as the new display value
        } catch (error) {
            display.value = "Error"; // If an error occurs during evaluation, set the display value to "Error"
            console.log(`Evaluation error: ${error}`); // Log the error message to the console
        }
    }
});

allClear.addEventListener("click", reset); // Call the reset function when the "AC" element is clicked

remove.addEventListener("click", () => {
    pop(); // Call the pop function when the "remove" element is clicked
});
