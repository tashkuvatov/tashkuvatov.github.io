
function setActive() {
	let burgerBtn = document.querySelector('.burger-menu__btn');
	let mobileMenu = document.querySelector('.burger-menu__mobile');
	// console.log(burgerBtn);
	burgerBtn.classList.toggle('_active');
	mobileMenu.classList.toggle('_active');
}
