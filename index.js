let numEl = document.getElementById("num1-el")
let numberEl = document.getElementById("num2-el")
console.log(numEl)
count = 0
countEl = 0

function add() {
    // console.log("button")
    count = count + 1
    numEl.innerText = count
}

function add1() {
    count = count + 2
    numEl.innerText = count   
}

function add2() {
    count = count + 3
    numEl.innerText = count  
}

function increment() {
    countEl = countEl + 1
    numberEl.innerText = countEl
}

function increment1() {
    countEl = countEl + 2
    numberEl.innerText = countEl 
}

function increment2() {
    countEl = countEl + 3
    numberEl.innerText = countEl 
}