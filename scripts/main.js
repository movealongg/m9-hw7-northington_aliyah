var tab = document.getElementsByTagName('a');
//This is all links on page

var locations = document.getElementsByClassName('hide-loc');

function changeColor() {
	this.classList.toggle('change-color');
};

function showLocations() {
	this.nextElementSibling.classList.toggle('show-loc');
};

for (i=0; i < tab.length; i++){
	tab[3].addEventListener('mouseenter', changeColor);
	tab[3].addEventListener('mouseleave', changeColor);
	tab[4].addEventListener('mouseenter', changeColor);
	tab[4].addEventListener('mouseleave', changeColor);
	tab[3].addEventListener('click', showLocations);
};
