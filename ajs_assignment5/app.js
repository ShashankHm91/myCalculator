let display = document.querySelector('#input');
let buttons = document.querySelectorAll('.btn');
let equals = document.getElementById('ans');
let allClear = document.querySelector('#clr');

Array.from(buttons).forEach((button) => {

    button.addEventListener('click', () => {
        let input = button.textContent;
        display.value += input
    })

    equals.addEventListener('click', () => {
        if (display.value == "") {
            display.value = "";
        }

        else {
            display.value = eval(display.value)
        }
    })

    allClear.addEventListener('click', () => {
        display.value = ""
    })

})


