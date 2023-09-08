// Inicialización de variables
const dropdown = document.querySelector('.language_dropdown')
const select = document.querySelector('.lan_dropdown_select')
const menu = document.querySelector(".lan_dropdown_menu")
const chevron = document.querySelector(".lan_dropdown_chevron")
const options = document.querySelectorAll('.lan_dropdown_menu li')
const selected = document.querySelector('.lan_dropdown_selected')


// El click sobre el selector genera la función para mostrar el menu
select.onclick = function dropdownFunction() {
    menu.classList.toggle("lan_dropdown_menu-open")
    chevron.classList.toggle("lan_dropdown_chevron-rotate")
}

// El click sobre cualquier lugar de la ventana genera la función y si el click "e" no esta sobre el selector se cierra el menu
window.onclick = function(e) {
    if (!dropdown.contains(e.target)) {
        if (menu.classList.contains("lan_dropdown_menu-open")) {
            menu.classList.remove("lan_dropdown_menu-open")
            chevron.classList.remove("lan_dropdown_chevron-rotate")
        }
    }
}

// El selctor "selected" toma el texto sobre el Li del selector "menu" sobre el que se hizo click
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText
        menu.classList.remove("lan_dropdown_menu-open")
        chevron.classList.remove("lan_dropdown_chevron-rotate")
    })
})
