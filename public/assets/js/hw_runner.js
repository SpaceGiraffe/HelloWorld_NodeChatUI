"use strict";

window.HelloWorld.Runner = (function() {
	
	function Runner(instance) {
		this.instance = instance;
		this.image    = null;
		this.x        = 0;
		this.y        = 0;
		this.width    = 512;
		this.height   = 96;
		this.sx       = 128;
		this.sy       = 0;
		this.sWidth   = 64;
		this.sHeight  = 96;
		this.velocity = {
			'x': 1,
			'y': 1
		};
		this.running  = false;
		
		this.init();
	}
	
	// extend Sprite class
	Runner.prototype = Object.create(Sprite.prototype);
	
	Runner.prototype.init = function() {
		this.image = App.Utils.loadImage('assets/img/sprite-1.png');
		
		// parent class (Sprite) method
		// @see window.HelloWorld.Sprite
		this.render();
		
		return this;
	};
	
	Runner.prototype.click = function() {
		this.register();
	};
	
	Runner.prototype.register = function() {
		if(this.running) {
			this.running = false;
		} else {
			this.running = true;
		}
	}
	
	Runner.prototype.run = function() {
		this.running = true;
		return this;
	};
	
	Runner.prototype.stop = function() {
		this.running = false;
		return this;
	};
	
	Runner.prototype.update = function() {
		if(this.running) {
			this.x += 8;
			this.sx += this.sWidth;
		}
		
		if(this.sx >= this.width) {
			this.sx = 0;
		}
		if(this.sy >= this.height) {
			this.sy = 0;
		}
	};
	
	Runner.prototype.draw = function() {
		this.instance.getContext().drawImage(
			this.image,
			this.sx,
			this.sy,
			this.sWidth,
			this.sHeight,
			this.x,
			this.y,
			this.sWidth,
			this.height
		);
	};
	
	return Runner;
	
})();

var Runner = window.HelloWorld.Runner;