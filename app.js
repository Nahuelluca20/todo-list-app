const divImage = document.getElementById('image')
const icon = document.createElement("img");
const check = document.getElementById('mode')

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    check.setAttribute('checked', true)
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    icon.src = './images/icon-sun.svg'
    icon.classList.add('sun')
    divImage.appendChild(icon)
} else {
    icon.src = './images/icon-moon.svg'
    icon.classList.add('moon')
    divImage.appendChild(icon)
}

check.addEventListener('change', function(event) {
    if (this.checked) {
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
        icon.src = './images/icon-sun.svg'
    } else {
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
        icon.src = './images/icon-moon.svg'
    }
})

/*TODO funcions*/

const input = document.getElementById('input-text')
const addnoteP = document.getElementById('notesID')
const noteCards = document.getElementById('notes-card')
const cleanInput = ""
input.addEventListener('keyup', addNote)

function addNote(event) {
    if (event.keyCode === 13) {
        document.getElementById("myBtn").click();
        const divElement = document.createElement('div')
        divElement.classList.add('notes')
        noteCards.appendChild(divElement)

        const imgCheck = document.createElement('img')
        imgCheck.classList.add('icon-check')
        imgCheck.src = './images/icon-check.svg'
        divElement.appendChild(imgCheck)

        const noteText = document.createElement('p')
        noteText.innerText = input.value
        divElement.appendChild(noteText)

        const imgCross = document.createElement('img')
        imgCross.classList.add('icon-cross')
        imgCross.src = './images/icon-cross.svg'
        divElement.appendChild(imgCross)

        imgCross.addEventListener('click', function() {
            noteCards.removeChild(divElement)
        })

        imgCheck.addEventListener('click', function() {
            imgCheck.classList.add('icon-checked')
            noteText.classList.add('text-checked')
        })
        input.value = ''
    }
}