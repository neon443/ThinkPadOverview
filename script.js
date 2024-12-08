document.addEventListener('DOMContentLoaded', function() {
	const menuToggle = document.getElementById('menu-toggle');
	const mobileMenu = document.getElementById('menu');
	const sections = document.querySelectorAll('section');
	const navLinks = document.querySelectorAll('nav ul li a');

	menuToggle.addEventListener('click', function() {
		console.log('menu toggle clicked');
		mobileMenu.classList.toggle('open');
	});

	// fly in anim
	sections.forEach((section, index) => {
		section.style.animationDelay = `${index * 250}ms`;
		section.classList.add('fly-in');
	});
});
