var tab = document.getElementsByTagName('a');
//This is all links on page

var locations = document.getElementsByClassName('hide-loc');

var grid = document.getElementsByTagName('figure');

function changeColor() {
	this.classList.toggle('change-color');
};

function showLocations() {
	this.nextElementSibling.classList.toggle('show-loc');
};

function changeOpacity() {
	this.classList.toggle('change-opacity');
};

for (i=0; i < tab.length; i++){
	tab[3].addEventListener('mouseenter', changeColor);
	tab[3].addEventListener('mouseleave', changeColor);
	tab[4].addEventListener('mouseenter', changeColor);
	tab[4].addEventListener('mouseleave', changeColor);
	tab[3].addEventListener('click', showLocations);
};

for (i=0; i < grid.length; i++){
	grid[i].addEventListener('mouseenter', changeOpacity);
	grid[i].addEventListener('mouseleave', changeOpacity);
};