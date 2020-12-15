const divImage = document.getElementById('image')
const icon = document.createElement("img");
const check = document.getElementById('mode')

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    check.setAttribute('checked', true)
    console.log(check)
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