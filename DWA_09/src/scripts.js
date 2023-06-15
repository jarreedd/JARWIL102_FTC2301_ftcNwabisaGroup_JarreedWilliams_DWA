
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'
import { html } from './dom_references.js'

/*-------------------------------------------------- GLOBAL VARIABLES --------------------------------------------------*/
/**
 * page is made up of a certain amount of books
 * @type {number}
 */
let page = 1;

/**
 * @type {Array}
 */
let matches = books

/**
 * @type {{start: number, end: number}}
 */
let range = {
    start : (page - 1) * BOOKS_PER_PAGE,
    end : BOOKS_PER_PAGE * page
}

/**
 * Takes certain amount of properties of the matches variable
 * @type {Array}
 */
let extracted = matches.slice(range.start, range.end)

/*-------------------------------------------------- FUNCTIONS AND EVENTHANDLER --------------------------------------------------*/
/**
 * Creates a button element that contains the image, title and author of a book with a specific id.
 * @param {{author:string, id:string, image:string, title:string}} props 
 * @returns {HTMLButtonElement} 
 */
const createBook = (props) => {
    const {author, id, image, title} = props

    const element = document.createElement("button");

    element.classList.add("preview");
    element.dataset.preview = id;
    element.innerHTML = /* html */ `
    <img 
        class="preview__image" 
        src="${image}" 
    />
    
    <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
    </div>
    `;

    return element
};

/**
 * Calculatesand returns the amount of books that are not yet on the page. Disables button that shows more books on the page if the amount is equal or less than 0.
 * @returns {number} 
 */
const updateRemaining = () => {

    let hasRemaining = matches.length - (page * BOOKS_PER_PAGE)
    html.list.button.disabled = hasRemaining <= 0

    const remaining = hasRemaining > 0 ? hasRemaining : 0
    return remaining
}


const showMore = () => {
    const fragment = document.createDocumentFragment()
    page += 1

    range = {
        start : (page - 1) * BOOKS_PER_PAGE,
        end : BOOKS_PER_PAGE * page
    }

    extracted = matches.slice(range.start, range.end)

    for (const book of extracted) {
        const element = createBook(book)
        fragment.appendChild(element)
    }
    
    html.list.items.appendChild(fragment)
    
    html.list.button.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining">
        (${updateRemaining()})
    </span>
    `;
}


class Book {
    constructor() {
        this.active = true

        this.getBook = (bookID) => {
            for (const book of books) {
                if (book.id === bookID) {return book}
            }
        }
    }
}

const activePreview = (event) => {
    event.preventDefault()

    const bookPreview = event.target.closest('.preview')
    const bookPreviewId = bookPreview.getAttribute('data-preview');
    const book = new Book()
    
    if (book.active) {
        const { title, image, description, published, author } = book.getBook(bookPreviewId)
        html.list.active.open = true
        html.list.blur.src = image
        html.list.image.src = image
        html.list.title.innerText = title
        html.list.subtitle.innerText = `${authors[author]} (${new Date(published).getFullYear()})`
        html.list.description.innerText = description
    }
}

const closePreview = () => {
    html.list.active.open = false
}

const showSettingsMenu = (event) => {
    event.preventDefault()
    html.settings.overlay.showModal()
}

const cancelSettings = () => {
    html.settings.overlay.close()
}

const saveTheme = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { theme } = Object.fromEntries(formData)

    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
    
    html.settings.overlay.close()
}

const showSearchMenu = () => {
    html.search.overlay.open = true 
    html.search.title.focus()
}

const cancelSearch = () => {
    html.search.overlay.open = false
}

const search = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []

    for (const book of books) {
        let genreMatch = filters.genre === 'any'

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            result.push(book)
        }
    }

    if (result.length < 1) {
        html.list.message.classList.add('list__message_show')
    } else {
        html.list.message.classList.remove('list__message_show')
    }

    matches = result
    page = 1

    extracted = matches.slice(range.start, range.end)

    const newItems = document.createDocumentFragment()

    for (const book of extracted) {
        const preview = createBook(book)
        newItems.appendChild(preview)
    }

    html.list.items.innerHTML = ''
    html.list.items.appendChild(newItems)

    html.list.button.innerHTML = `
        <span>Show more </span>
        <span class="list__remaining">
            (${updateRemaining()})
        </span>
    `;

    window.scrollTo({top: 0, behavior: 'smooth'});
    html.search.overlay.open = false
}

/*-------------------------------------------------- MAIN LOGIC --------------------------------------------------*/
const starting = document.createDocumentFragment()

for (const booksIndex of extracted) {
    const element = createBook(booksIndex)
    starting.appendChild(element)
}

html.list.items.appendChild(starting)










const genreHtml = document.createDocumentFragment()
const firstGenreElement = document.createElement('option')
firstGenreElement.value = 'any'
firstGenreElement.innerText = 'All Genres'
genreHtml.appendChild(firstGenreElement)

for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    genreHtml.appendChild(element)
}
html.search.genre.appendChild(genreHtml)


const authorsHtml = document.createDocumentFragment()
const firstAuthorElement = document.createElement('option')
firstAuthorElement.value = 'any'
firstAuthorElement.innerText = 'All Authors'
authorsHtml.appendChild(firstAuthorElement)

for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    authorsHtml.appendChild(element)
}
html.search.author.appendChild(authorsHtml)










if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.settings.theme.value = 'night'
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    html.settings.theme.value = 'day'
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}


html.list.button.innerHTML = /* html */`
    <span>Show more</span>
    <span class="list__remaining"> (${updateRemaining()})</span>
`;

/*-------------------------------------------------- EVENTLISTENERS --------------------------------------------------*/
html.settings.button.addEventListener('click', showSettingsMenu)
html.settings.cancel.addEventListener('click', cancelSettings)
html.settings.form.addEventListener('submit', saveTheme)
html.list.button.addEventListener('click', showMore)
html.search.button.addEventListener('click', showSearchMenu)
html.search.cancel.addEventListener('click', cancelSearch)
html.search.form.addEventListener('submit', search)
html.list.items.addEventListener('click', activePreview)
html.list.close.addEventListener('click', closePreview)