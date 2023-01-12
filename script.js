// nodes
//display
//test
const display = document.getElementById("display")
const held = document.getElementById("held")
const opreatorDisplay = document.getElementById("opreator")
const current = document.getElementById("current")
//numbers side
const numbers = document.querySelectorAll("numbers")
const _clear = document.getElementById("clear")
const _nigative = document.getElementById("nigative")//not implmnted yet
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
let equalpressed = false;
let dotpress = false;
let nigativePress = false;
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

/*
If you want the usual behavior when rounding negative numbers, you would need to convert negative numbers to positive before calling Math.round(), and then convert them back to negative numbers before returning.
*/
function rounding(savedvalue,currentValue)
{
    return
}
function add(savedValue, currentValue) {
    return Math.round(((+savedValue) + (+currentValue))*100000)/100000;
}
function subtract(savedValue, currentValue) {
    return Math.round((savedValue - currentValue)*100000)/100000 ;
}
function multiply(savedValue, currentValue) {
    return Math.round((savedValue * currentValue)*100000)/100000;
}
function divide(savedValue, currentValue) { //something is wrong with the division
    if (currentValue == '0') { saved_value=0; return "Fuck you" }
    sass()
    return Math.round((savedValue / currentValue)*100000)/100000;
}
function sass()
{
    if(typeof(savedValue)===NaN||typeof(currentValue)===NaN ) 
    return "still Fuck you";
}
function operate(opretor, savedValue, currentValue) {
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
    opreatorDisplay.innerText="";
})
_backspace.addEventListener("click", () => {//backspace button
    current.innerText = (current_value.slice(0, -1));
    current_value = (current_value.slice(0, -1));
})

function updateNum(num) {
    nigativePress = false;

    if(equalpressed==true)
    {
        held.innerText="";
        current.innerText = num;
        current_value = num;
        saved_value="";
        equalpressed=false;
    }
    else{
    current.innerText += num;
    current_value += num;}
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
_nigative.addEventListener("click", () => {



    for (const num of current_value) {
        if(num=="-")
        {
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
_dot.addEventListener("click", () => {
    for (const num of current_value) {
        if(num==".")
        {
            return
        }
    }
    updateNum(".")
})

function updateOpreator(selected_operator) {
    if (current_value != "" & saved_value != "" & equalpressed == false) {
        current_value = operate(opretor, saved_value, current_value)
        opreatorDisplay.innerText= opretor;
        current.innerText = current_value;
    }
    equalpressed = false;  
    opretor = selected_operator;
    saved_value = current_value;
    current_value = "";
    current.innerText = ""
    held.innerText = saved_value;
    opreatorDisplay.innerText= opretor;


}

_addition.addEventListener("click", () => { updateOpreator("+") })
_subtraction.addEventListener("click", () => { updateOpreator("-") })
_multiplication.addEventListener("click", () => { updateOpreator("*") })
_division.addEventListener("click", () => { updateOpreator("/") })
_equals.addEventListener("click", () => {
    if (opretor == "") return
    current_value = operate(opretor, saved_value, current_value)
    current.innerText = current_value;
    held.innerText = saved_value
    equalpressed = true;

})
window.addEventListener("keydown",function(e)
{
    const number = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!number) return;
    number.click()
})
window.addEventListener("keydown",function(e)
{
    const number2 = document.querySelector(`button[data-key2="${e.keyCode}"]`);
    if(!number2) return;
    number2.click()
})
const clicbutton = document.querySelectorAll('button')
clicbutton.addEventListener("keydown",()=>{number})