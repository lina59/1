const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
 
const numders = document.querySelectorAll(".buttons");
const operations = document.querySelectorAll(".operation");

const equalBtn = document.querySelector(".equal")

const clearAllBtn = document.querySelector(".all-clear");
const clearLastBtn = document.querySelector(".last-entity-clear");

let display1Num = "";
let display2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numders.forEach((number =>{
    number.addEventListener("click", (e) => {
        if (e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }
        else if (e.target.innerText === '.' && haveDot){
            return;
        }

        display2Num += e.target.innerText;
        display2.innerText = display2Num;
    });
}));

operations.forEach((operation) => {
    operation.addEventListener( "click", (e) => {
        if (!display2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;

        if (display1Num && display2Num && lastOperation){
            mathOperation();
        }
        else{
            result=parseFloat(display2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;

    });
});

function clearVar(name = ""){
    display1Num += display2Num + " " + name + " ";
    display1.innerText = display1Num;
    display2.innerText = "";
    display2Num = "";
    tempResult.innerText = result;

}

function mathOperation(){
    if (lastOperation === '*'){
        result = parseFloat(result) * parseFloat(display2Num);
    }
    else if (lastOperation === '+'){
        result = parseFloat(result) + parseFloat(display2Num);
    } 
    else if (lastOperation === '-'){
        result = parseFloat(result) - parseFloat(display2Num);
    }
    else if (lastOperation === '/'){
        result= parseFloat(result) / parseFloat(display2Num);
    }
    else if (lastOperation === '%'){
        result = parseFloat(result) % parseFloat(display2Num);
    }
}

equalBtn.addEventListener("click",(e) => {
    if (!display1Num || !display2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    tempResult.innerText = "";
    display2Num = result;
    display1Num = "";
})

 
