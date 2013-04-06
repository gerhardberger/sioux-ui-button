var inherits = require('inherits');
var fs = require('fs');
var insertCss = require('insert-css');
var UI = require('sioux-ui');

function initStates (self) {
	self.on('touchstart', function (event) {
		event.preventDefault();
		self.element.classList.add('active');
	});

	var endingFn = function (event) {
		self.element.classList.remove('active');
	};

	self.on('touchend', endingFn);
	self.on('touchcancel', endingFn);
	self.on('touchleave', endingFn);
}


function UIButton (element) {
	this.element = element;
	this.spawnEvents();

	initStates(this);

	return this;
}

inherits(UIButton, UI);

var css = fs.readFileSync(__dirname + '/style.css');
insertCss(css);

module.exports = UIButton;