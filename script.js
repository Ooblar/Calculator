// nodes
//display
const display = document.getElementById("display")
const held = document.getElementById("held")
const current = document.getElementById("current")
//numbers side
const numbers = document.querySelectorAll("numbers")
const _clear = document.getElementById("clear")
const _percentage = document.getElementById("percentage")//not implmnted yet
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
let current_value = "";
let saved_value = "";
let opretor = "";
/*
1 -writing in current_value 
if an opretor is pressed 
chang into next value
if(= is clicked){use opratefucntion on current_value and next_value;
 next value is now current value}
ifelse (oprator is clicked again oprate function on current-value and next_value)
*/

//------------functions
//math
function add(savedValue, currentValue) {
    return ((+savedValue) + (+currentValue));
}
function subtract(savedValue, currentValue) {
    return savedValue - currentValue;
}
function multiply(savedValue, currentValue) {
    return savedValue * currentValue;
}
function divide(savedValue, currentValue) { //something is wrong with the division
    return savedValue / currentValue;
}

function operate(opretor, savedValue, currentValue) {
    if(saved_value="") return;
    if (opretor == "+") {
        return add(savedValue, currentValue);
    }
    if (opretor == "-") {
        return subtract(savedValue, currentValue);
    }
    if (opretor == "*") {
        return multiply(savedValue, currentValue);
    }
    if (opretor == "/") {
        return divide(savedValue, currentValue);
    }
}

_clear.addEventListener("click", () => {//clear button
    current.innerText = "";
    current_value = "";
    saved_value = "";
    held.innerText = "";
    opretor = "";
    console.log(current_value)
})
_backspace.addEventListener("click", () => {//backspace button
    current.innerText = (current_value.slice(0, -1));
    current_value = (current_value.slice(0, -1));
    console.log(current_value)
})

function updateNum(num) {
    current.innerText += num;
    current_value += num;
    console.log(current_value)
}

_9.addEventListener("click", () => {
    updateNum("9");
})
_8.addEventListener("click", () => {
    updateNum("8");

})
_7.addEventListener("click", () => {
    updateNum("7");

})
_6.addEventListener("click", () => {
    updateNum("6");

})
_5.addEventListener("click", () => {
    updateNum("5");

})
_4.addEventListener("click", () => {
    updateNum("4");

})
_3.addEventListener("click", () => {
    updateNum("3");

})
_2.addEventListener("click", () => {
    updateNum("2");

})
_1.addEventListener("click", () => {
    updateNum("1");

})
_0.addEventListener("click", () => {
    updateNum("0");

})
_00.addEventListener("click", () => {
    updateNum("00");

})
_dot.addEventListener("click", () => {
    updateNum(".");
})

function updateOpreator(selected_operator) {
    saved_value = current_value;
    opretor = selected_operator;
    current_value = "";
    current.innerText = ""
    held.innerText = saved_value;
}

_addition.addEventListener("click", () => { updateOpreator("+")})
_subtraction.addEventListener("click", () => { updateOpreator("-")})
_multiplication.addEventListener("click", () => { updateOpreator("*")})
_division.addEventListener("click", () => { updateOpreator ("/") })
_equals.addEventListener("click", () => {
    current_value = operate(opretor, saved_value, current_value)
    current.innerText = current_value;
    console.log(current.innerText)
})
