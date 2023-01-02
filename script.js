// nodes
//display
const display = document.getElementById("display")
const held = document.getElementById("held")
const current = document.getElementById("current")

//numbers side
const numbers = document.querySelectorAll("numbers")
const _clear = document.getElementById("clear")
const _percentage = document.getElementById("percentage")
const _backspace = document.getElementById("backspace")
const _7 = document.getElementById("7")
const _8 = document.getElementById("8")
const _9 = document.getElementById("9")
const _4 = document.getElementById("4")
const _5 = document.getElementById("5")
const _6 = document.getElementById("6")
const _1 = document.getElementById("1")
const _2 = document.getElementById("2")
const _3 = document.getElementById("3")
const _00 = document.getElementById("00")
const _0 = document.getElementById("0")
const _dot = document.getElementById("dot")
//opretions side
const operations = document.querySelectorAll("operations")
const _addition = document.getElementById("addition")
const _subtraction = document.getElementById("subtraction")
const _multiplication = document.getElementById("multiplication")
const _division = document.getElementById("division")
const _equals = document.getElementById("equals")


//values
let currentvalue = "";
let selectedopretor = "";
//functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(opretor, a, b) {
    if (opretor == "+") {
        return add(a, b);
    }
    if (opretor == "-") {
        return subtract(a, b);
    }
    if (opretor == "*") {
        return multiply(a, b);
    }
    if (opretor == "/") {
        return divide(a, b);
    }
}
_clear.addEventListener("click", () => {
    current.innerText = "";
    currentvalue = "";
    console.log(currentvalue)
})
_backspace.addEventListener("click", () => {
    current.innerText = (currentvalue.slice(0,-1));
    currentvalue = (currentvalue.slice(0,-1));
    console.log(currentvalue)
})

_9.addEventListener("click", () => {
    current.innerText += "9";
    currentvalue += "9";
    console.log(currentvalue)
})
_8.addEventListener("click", () => {
    current.innerText += "8";
    currentvalue += "8";
    console.log(currentvalue);
})
_7.addEventListener("click", () => {
    current.innerText += "7";
    currentvalue += "7";
    console.log(currentvalue);
})
_6.addEventListener("click", () => {
    current.innerText += "6";
    currentvalue += "6";
    console.log(currentvalue);
})
_5.addEventListener("click", () => {
    current.innerText += "5";
    currentvalue += "5";
    console.log(currentvalue);
})
_4.addEventListener("click", () => {
    current.innerText += "4";
    currentvalue += "4";
    console.log(currentvalue);
})
_3.addEventListener("click", () => {
    current.innerText += "3";
    currentvalue += "3";
    console.log(currentvalue);
})
_2.addEventListener("click", () => {
    current.innerText += "2";
    currentvalue += "2";
    console.log(currentvalue);
})
_1.addEventListener("click", () => {
    current.innerText += "1";
    currentvalue += "1";
    console.log(currentvalue);
})
_0.addEventListener("click", () => {
    current.innerText += "0";
    currentvalue += "0";
    console.log(currentvalue);
})
_00.addEventListener("click", () => {
    current.innerText += "00";
    currentvalue += "00";
    console.log(currentvalue);
})
_dot.addEventListener("click", () => {
    current.innerText += ".";
    currentvalue += ".";
    console.log(currentvalue);
})














