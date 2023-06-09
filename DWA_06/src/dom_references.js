/**
 * Checks if a html element exists before returning that html element
 * @param {string} label 
 * @returns {HTMLElement}
 */
const getHtml = (label) => {
    const node = document.querySelector(`[data-${label}]`);

    if (!(node instanceof HTMLElement)) {
        throw new Error(
            `[data-${label} was not found in HTML]`
        )
    };

    return node;
}

/**
 * @type {{list : object, search : object, settings : object}} html
 * @property {object} list - constain DOM references that relate to the books being displayed
 * @property {object} search - constain DOM references that relate to the search functionality
 * @property {object} settings - constain DOM references that relate to the settings functionality
 */

export const html = {
    list: {
        items: getHtml('list-items'),
        message: getHtml('list-message'),
        button: getHtml('list-button'),
        active: getHtml('list-active'),
        blur: getHtml('list-blur'),
        image: getHtml('list-image'),
        title: getHtml('list-title'),
        subtitle: getHtml('list-subtitle'),
        description: getHtml('list-description'),
        close: getHtml('list-close'),
    },

    search: {
        button: getHtml('header-search'),
        overlay: getHtml('search-overlay'),
        cancel: getHtml('search-cancel'),
        form: getHtml('search-form'),
        title: getHtml('search-title'),
        genre: getHtml('search-genres'),
        author: getHtml('search-authors'),
        submit: getHtml('search-overlay] [type="submit"')
    },

    settings: {
        button: getHtml('header-settings'),
        overlay: getHtml('settings-overlay'),
        form: getHtml('settings-form'),
        theme: getHtml('settings-theme'),
        cancel: getHtml('settings-cancel'),
        submit: getHtml('settings-overlay] [type="submit"')
    }
}