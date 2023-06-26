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
});

html.add.addEventListener('click', () => {
    dispatch(increase());
    console.log(getState());

    const newValue = getState().count
    html.number.value = newValue;
});

html.reset.addEventListener('click', () => {
    dispatch(reset())
    console.log(getState());

    const newValue = getState().count
    html.number.value = newValue

    html.resetmsg.show();
});