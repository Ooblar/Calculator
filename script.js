// nodes
const display = document.getElementById("display")
const opreatorDisplay = document.getElementById("opreator")
const current = document.getElementById("current")
//numbers side
const numbers = document.querySelectorAll("numbers")
const _clear = document.getElementById("clear")
const _nigative = document.getElementById("nigative")
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


// defult values values
let current_value = "";
let saved_value = "";
let opretor = "";
let dotpress = false;
let nigativePress = false;

//------------functions

//main opreations functions
function add(savedValue, currentValue) {
    return Math.round(((+savedValue) + (+currentValue)) * 100000) / 100000; //using (X*100000)/100000;to round to 5 decemal places
}
function subtract(savedValue, currentValue) {
    return Math.round((savedValue - currentValue) * 100000) / 100000;
}
function multiply(savedValue, currentValue) {
    return Math.round((savedValue * currentValue) * 100000) / 100000;
}
function divide(savedValue, currentValue) { 
    if (currentValue == '0') { return "ILLEGAL ACTION" }
    return Math.round((savedValue / currentValue) * 100000) / 100000;
}

function operate(opretor, savedValue, currentValue) {
    if (opretor == "+") {
        return add(savedValue, currentValue);
    }
    if (opretor == "-") {
        return subtract(savedValue, currentValue);
    }
    if (opretor == "x") {
        return multiply(savedValue, currentValue);
    }
    if (opretor == "÷") {
        return divide(savedValue, currentValue);
    }

}
//
function updateNum(num) {

    //when i make an opration on a num and i want to make another opration on it it would concat the new number on the old number and the shown value in the display is not the real value 
    if(saved_value!=""&&current_value=="")//so this is used to  empty the display
    {
        current.innerText="";
    }

    // if (isNaN(current_value) || isNaN(saved_value)) return;
    nigativePress = false;//to reset the nigative sigh
    current.innerText += num;
    current_value += num;
}

function updateOpreator(selected_operator) {
    if (isNaN(current_value) || isNaN(saved_value)) return;
    // // oprate on the current and saved value in the moment on the opreation selection
    if (current_value != "" & saved_value != "") {
        saved_value = operate(opretor, saved_value, current_value) //make the opration
        opretor = selected_operator;//change the oprator again after you do the previews opration if i repressed any opration 
        opreatorDisplay.innerText = opretor;//change the show opretor
        current_value = "";//resetting so it wouldnot add to the current number in the background
        current.innerText=saved_value;
    }
    else {
        // current.innerText = saved_value;
        opretor = selected_operator;
        opreatorDisplay.innerText = opretor;
        saved_value = current_value;

        current_value = "";
        current.innerText = ""
    }
}

//

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

_clear.addEventListener("click", () => {
    current.innerText = "";
    current_value = "";
    saved_value = "";
    opretor = "";
    opreatorDisplay.innerText = "";
})

_backspace.addEventListener("click", () => {
    current.innerText = (current_value.slice(0, -1));
    current_value = (current_value.slice(0, -1));
})

_nigative.addEventListener("click", () => {//this event will look for a "-"in the number and if it have one i will remove it and it it dosnt it will add it
    for (const num of current_value) {
        if (num == "-") {
            nigativePress = true;
        }
    }
    if (nigativePress == false) {
        current.innerText = "-" + current_value;
        current_value = "-" + current_value;
    }
    else {
        current_value = current_value.replace("-", "")
        current.innerText = current_value.replace("-", "")
        nigativePress = false;
    }
})

_dot.addEventListener("click", () => {//add a decimal if there isn't any and wont add it if its already there
    for (const num of current_value) {
        if (num == ".") {
            return
        }
    }
    updateNum(".")
})

_addition.addEventListener("click", () => { updateOpreator("+") })
_subtraction.addEventListener("click", () => { updateOpreator("-") })
_multiplication.addEventListener("click", () => { updateOpreator("x") })
_division.addEventListener("click", () => { updateOpreator("÷") })

_equals.addEventListener("click", () => {
    if (opretor == "" || saved_value == "") return;
    current_value = operate(opretor, saved_value, current_value)
    current.innerText = current_value;
    saved_value = "";
    opreatorDisplay.innerText = "";
})

//adding keyboard functionality
window.addEventListener("keydown", function (e) {
    e.preventDefault();
    const number = document.querySelector(`button[data-key="${e.code}"]`);//needs to be changed 
    if (!number) return;
    number.click()
})
window.addEventListener("keydown", function (e) {
    e.preventDefault();

    const number2 = document.querySelector(`button[data-key2="${e.code}"]`);
    if (!number2) return;
    number2.click()
})
//the previus value should be saved in the memory when i press =

//and it should updated to the new calcolated num when i press any of those (+ / * - )