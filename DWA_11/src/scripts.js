import { getState, dispatch, } from "../model/store.js";
import { increase, decrease, reset } from "../model/actions.js";


const html = {
    number: document.querySelector('[data-value-number]'),
    resetmsg: document.querySelector('[data-rest-msg]'),
    subtract: document.querySelector('[data-value-subtract]'),
    add: document.querySelector('[data-value-add]'),
    reset: document.querySelector('[data-reset-button]')
};

html.subtract.addEventListener('click', () => {
    dispatch(decrease());
    console.log(getState());

    const newValue = getState().count
    html.number.value = newValue;

    // // Enable add button
    // if (html.add.disabled === true) {
    //     html.add.disabled = false
    // }

    // Disable subtract button when number is smaller or equal to min value
    if (newValue <= getState().state) {
        // subtract.disabled = true
    }
});

html.add.addEventListener('click', () => {
    dispatch(increase());
    console.log(getState());

    const newValue = getState().count
    html.number.value = newValue;

    // // Enable subtract button
    // if (html.subtract.disabled === true) {
    //     html.subtract.disabled = false
    // }

    // Disable add button when number is bigger or equal to max value
    // if (newValue >= MAX_NUMBER) {
    //     // add.disabled = true
    // }
});

html.reset.addEventListener('click', () => {
    dispatch(reset())
    console.log(getState());

    const newValue = getState().count
    html.number.value = newValue

    html.resetmsg.show();
});

console.log(getState());