var tab = document.getElementsByTagName('a');
//This is all links on page

function changeColor(){

};

for (i=0; i < tab.length; i++){
	tab[3].addEventListener('mouseenter', changeColor);
	tab[3].addEventListener('mouseleave', changeColor);
	tab[4].addEventListener('mouseenter', changeColor);
	tab[4].addEventListener('mouseleave', changeColor);
};
