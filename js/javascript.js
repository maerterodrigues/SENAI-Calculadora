


(function calculus() {
    var allClear = document.querySelector("#ac")
    var backspace = document.querySelector("#del")
    var numbers = document.querySelectorAll(".calculatorNumbers")
    var mathSymbols = document.querySelectorAll(".mathSymbols")
    var mathEqual = document.querySelector(".mathEqual")
    var display = document.querySelector(".inputDisplay")

    for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        var numbers = this.value
        parseFloat(numbers)
        display.value += parseFloat(numbers)
    })
}

    for (var i = 0; i < mathSymbols.length; i++) {
    mathSymbols[i].addEventListener("click", function() {
        var symbol = this.value
        display.value += symbol
    })
}

    mathEqual.addEventListener("click", function(){
        if (display.value === "") {
            display.value = ""
        } else {
            var result = eval(display.value)
            display.value = result
        }
    })


    allClear.addEventListener("click", () => {
        display.value = ""
    })

    backspace.addEventListener("click", () => {
       display.value = display.value.substring(0, display.value.length - 1)
    })

})()