STEP_AMOUNT = 1

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[data-key="reset"]')
const resetmsg = document.querySelector('[data-key="alert-reset"]');

const increment = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue
}

const decrement = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue
}

const Reset = () => {
    number.value = 0
    resetmsg.show()
}

subtract.addEventListener('click', decrement)
add.addEventListener('click', increment)
reset.addEventListener('click', Reset)