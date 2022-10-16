
/* Function in parenthesis in other for it to trigger*/

(function calculus() {
    var allClear = document.querySelector("#ac")
    var backspace = document.querySelector("#del")
    var numbers = document.querySelectorAll(".calculatorNumbers")
    var mathSymbols = document.querySelectorAll(".mathSymbols")
    var mathSymbolDot = document.querySelector(".mathSymbolDot")
    var mathEqual = document.querySelector(".mathEqual")
    var display = document.querySelector(".inputDisplay")

    /* Detect all the buttons with numbers in the calculator */
    for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        var numbers = this.value // The number of the button clicked will be the one who is added through the for loop
        display.value += numbers // The value inside the display will added with the numbers chosen
    })
}

    for (var i = 0; i < mathSymbols.length; i++) {
    mathSymbols[i].addEventListener("click", function() {
        var symbol = this.value // The math symbol of the button clicked will be the one who is added through the for loop
        display.value += symbol // The value inside the display will added with the math symbol chosen
    })
}

    mathSymbolDot.addEventListener("click", function() {
        var dot = this.value // A dot, through it's own button, will be the one added
        display.value += dot // The value inside the display will added with the dot
    })
        

    mathEqual.addEventListener("click", function(){
        if (display.value === "") { // If the equal button is pressed and the display is empty, the value of "empty" will be returned
            display.value = ""
        } else { // Else, if the display is not empty, the calculation of the numbers and math symbols inside the display will be done
            var result = eval(display.value)
            display.value = result
        }
        
    })

    mathEqual.addEventListener("keydown", function(e){
        console.log(e.key)
    })


    allClear.addEventListener("click", () => {
        display.value = ""
    })

    backspace.addEventListener("click", () => {
       display.value = display.value.substring(0, display.value.length - 1) // The last character will deleted acording to the substring of the display's length
    })

})()

// Function to switch between dark and light mode

function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}