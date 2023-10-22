const submitButton = document.querySelector('.hero .btn')
const okButton = document.querySelector('.popup button')
const dialog = document.querySelector('.popup')

submitButton.addEventListener('click', () => {
    dialog.classList.add('popup-open')
})

okButton.addEventListener('click', () => {
    dialog.classList.remove('popup-open')
})