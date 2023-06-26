const html = {
    number: document.querySelector('[data-value-number]'),
    resetmsg: document.querySelector('[data-rest-msg]'),
    subtract: document.querySelector('[data-value-subtract]'),
    add: document.querySelector('[data-value-add]'),
    reset: document.querySelector('[data-reset-button]')
};

html.subtract.addEventListener('click', () => {});

html.add.addEventListener('click', () => {});

html.reset.addEventListener('click', () => {
    html.resetmsg.show();
});