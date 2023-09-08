window.onscroll = function() {stickyFunction()};

// Inicializar Variables
var topbar = document.querySelector(".header_top-bar")
var sticky = topbar.offsetTop;
var heightLineHeader = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-line-height'), 10)
var topbarLogo = document.querySelector('.top-bar_logo')
var tb_menus = document.querySelectorAll(".tb_menu_container")
var mainView = document.querySelector(".main-view")

// Función de Sticky
function stickyFunction() {
  if (window.pageYOffset >= (sticky - heightLineHeader)) {
    topbar.classList.add("header_sticky")
    topbarLogo.classList.add("top-bar_logo-active")
    mainView.classList.add("main-view-sticky")
    tb_menus.forEach(tb_menu => {
      tb_menu.classList.add("tb_menu_container-sticky")
    })
  } else {
    topbar.classList.remove("header_sticky")
    topbarLogo.classList.remove("top-bar_logo-active")
    mainView.classList.remove("main-view-sticky")
    tb_menus.forEach(tb_menu => {
      tb_menu.classList.remove("tb_menu_container-sticky")
    })
  }
}