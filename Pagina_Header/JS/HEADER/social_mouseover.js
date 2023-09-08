// Inicialización de variables
const social_Ul = document.querySelector(".social_items")
const socialItems = document.querySelectorAll(".social_item")
const socialText = document.querySelector(".social_text")
const socialArr = [
    "Facebook",
    "Instagram",
    "Whatsapp"
]

social_Ul.addEventListener("mouseover", (event) => {
    var nodes = Array.from(social_Ul.children)
    var li = event.target.closest('li')
    var index = nodes.indexOf(li)

    if (index >= 0) {
        socialText.innerHTML = socialArr[index]
    }
})

socialItems.forEach(socialItem => {
    socialItem.onmouseover = () => {
        socialText.classList.add("social_text-hover")
    }

    socialItem.onmouseout = () => {
        socialText.classList.remove("social_text-hover")
    }
})
