const MAX_NUMBER = 20
const MIN_NUMBER = -20
STEP_AMOUNT = 1

const number = document.querySelector('[data-value-number]')
const subtract = document.querySelector('[data-value-subtract]')
const add = document.querySelector('[data-value-add]')
const reset = document.querySelector('[data-reset-button]')
const resetmsg = document.querySelector('[data-rest-msg]');

const increment = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue

    // Enable subtract button
    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    // Disable add button when number is bigger or equal to max value
    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    }
}

const decrement = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue

    // Enable add button
    if (add.disabled === true) {
        add.disabled = false
    }

    // Disable subtract button when number is smaller or equal to min value
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}

const Reset = () => {
    number.value = 0

    // Enable subtract and add buttons
    if (subtract.disabled === true || add.disabled === true) {
        subtract.disabled = false
        add.disabled = false
    }

    resetmsg.show()
}

subtract.addEventListener('click', decrement)
add.addEventListener('click', increment)
reset.addEventListener('click', Reset)