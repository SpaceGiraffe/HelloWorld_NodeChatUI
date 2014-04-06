"use strict";

window.HelloWorld.Disaster.Tornado = (function() {
	
	function Tornado(instance) {
		this.instance = instance;
		
		this.init();
	}
	
	Tornado.prototype = Object.create(Disaster.prototype);
	
	Tornado.prototype.init = function() {
		this.render();
		console.log('new Tornado!');
		return this;
	}
	
	return Tornado;
	
})();

var Tornado = window.HelloWorld.Disaster.Tornado;


window.HelloWorld.Disaster.Thunderstorm = (function() {
	
	function Thunderstorm(instance) {
		this.instance = instance;
		
		this.init();
	}
	
	Thunderstorm.prototype = Object.create(Disaster.prototype);
	
	Thunderstorm.prototype.init = function() {
		this.render();
		console.log('new Thunderstorm!');
		return this;
	}
	
	return Thunderstorm;
	
})();

var Thunderstorm = window.HelloWorld.Disaster.Thunderstorm;