var btn = document.getElementById('menu-btn')
var menu = document.getElementById('menu')
var displayMenu = () => {
	menu.classList.toggle('hidden')
}
btn.addEventListener('click', displayMenu)
