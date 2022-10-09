var allClear = document.querySelector("#ac")
var backspace = document.querySelector("#del")
var numbers = document.querySelectorAll(".calculatorNumbers")
var mathSymbols = document.querySelectorAll(".mathSymbols")
var inputNumber = document.querySelector(".inputDisplay")



for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        var numbers = this.value
        parseFloat(numbers)
        inputNumber.value += parseFloat(numbers)
        console.log(parseFloat(numbers))
        operation(numbers)
    })
}

for (var i = 0; i < mathSymbols.length; i++) {
    mathSymbols[i].addEventListener("click", function() {
        var symbol = this.value
        inputNumber.value += symbol
        console.log(symbol)
        operation(symbol)
    })
}


allClear.addEventListener("click", () => {
    inputNumber.value = ""
})

