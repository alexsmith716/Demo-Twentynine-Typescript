const navbarmenu = document.querySelector('.navbar');

document.addEventListener('click', function (event) {
	if (event.target.classList.contains('js-scroll-trigger')) {
		if (navbarmenu.querySelector('.clicked')) {
			navbarmenu.querySelector('.clicked').classList.remove('clicked');
		}
	}
});
