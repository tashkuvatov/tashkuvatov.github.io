const filterBox = document.querySelectorAll('.works__items-gallery-item');

document.querySelector('nav').addEventListener('click', (e) => {
	if (e.target.tagName !== 'LI') return false;

	let filterClass = e.target.dataset['f'];
	// console.log(filterClass);
	filterBox.forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
			elem.classList.add('hide');
		}
	})
})