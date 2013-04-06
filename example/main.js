var UIButton = require('../index.js');

var button = new UIButton(document.querySelector('button'));
console.log(button);

button.on('touchleave', function (event) {
	console.log('LEFT');
}).on('touchstart', function (event) {
	console.log('START');
});