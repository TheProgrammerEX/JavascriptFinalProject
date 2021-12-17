/**
 * 
 */
var arryWithPictures;
var leftArrowElement;
var partialPath;
var firstPicRef;
var secondPicRef;
window.addEventListener('beforeload', function() {

arryWithPictures = ['Pizza-Assorty.jpg','Pizza-Cheese.jpg', 'Pizza-background.png', 'Pizza-Hawaii.jpg', 'Pizza-Shrimps.jpg'];
leftArrowElement = document.getElementById('lefArrow');
partialPath = '../pic/';
firstPicRef = document.getElementById('firstPickture');
secondPicRef = document.getElementById('secondPickture');	
});


console.log(firstPicRef);
leftArrowElement.addEventListener('click', function() {
	var indexOfFirstEl = arryWithPictures.indexOf()
});