document.addEventListener('DOMContentLoaded', function() {
	const menuToggle = document.getElementById('menu-toggle');
	const mobileMenu = document.getElementById('mobile-menu');

	menuToggle.addEventListener('click', function() {
		console.log('menu toggle clicked');
		mobileMenu.classList.toggle('open');
	});
});
