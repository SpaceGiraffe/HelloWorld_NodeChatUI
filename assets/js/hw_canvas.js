"use strict";

window.HelloWorld.Canvas = (function() {

	function Canvas(instance, container, width, height, context) {
		this.instance;
		this.element;
		this.ctx;
		this.size;
		this.register;

		var that = this;

		this.bindEvents = function() {
			this.element.on('click', function(e){
				that.register.x = e.offsetX;
				that.register.y = e.offsetY;
				that.register();
			});
		};

		this.init(instance, container, width, height, context);
	}

	Canvas.prototype = {
		init: function(instance, container, width, height, context) {
			this.instance = instance;
			this.size = {
				'w': width,
				'h': height
			};
			this.press = {
				'x': 0,
				'y': 0
			};

			this.make(container);
			this.bindEvents();
			this.setContext(context);

			return this;
		},
		make: function(container) {
			// create canvas element
			container.append(
				this.element = $('<canvas width="' + this.size.w + '" height="' + this.size.h + '"></canvas>')
			);
		},
		clear: function() {
			this.ctx.beginPath();
			this.ctx.clearRect(0, 0, this.size.w, this.size.h);
		},
		update: function() {
			// clear stage
			this.clear();

			// update all sprites
			$(this.instance.sprites).each(function() {
				this.update();
			});

			// draw sprites after updating
			this.draw();
		},
		draw: function() {
			// draw the environment background
			this.drawBackground();
			// draw environmental effects
			this.drawEffects();
			// draw sprites
			this.drawSprites();
		},
		drawBackground: function() {
			var image = App.Utils.loadImage('assets/img/bg.png');
			this.instance.getContext().drawImage(
				image,
				0,
				0,
				this.size.w,
				this.size.h
			);
		},
		drawEffects: function() {
			
		},
		drawSprites: function() {
			$(this.instance.sprites).each(function() {
				this.draw();
			});
		},
		register: function() {
			//var collide = App.Utils.collides(this.instance.sprites, this.register.x, this.register.y);
			//if(collide.click) {
			//	collide.click();
			//}
			// draw pine tree on click
			var that = this;
			$(this.instance.sprites).each(function() {
				if (App.Utils.testForCollision(
						this,
						that.register.x,
						that.register.y)) {
					this.register(that.register.x, that.register.y);
				}
			})
			//new PineTree(this.instance, this.register.x, this.register.y);
		},

		// accessors and mutators
		getContext: function() {
			return this.ctx;
		},
		setContext: function(ctx) {
			this.ctx = $(this.element)[0].getContext(ctx);

			return this.ctx;
		}
	};

	return Canvas;

})();

var Canvas = window.HelloWorld.Canvas;

window.HelloWorld.Canvas.Engine = (function() {

	function Engine(instance, fps) {
		this.instance;
		this.fps;
		this.loop;
		this.frame;

		this.init(instance, fps);
	}

	Engine.prototype = {
		init: function(instance, fps) {
			this.instance = instance;
			this.fps = fps;
			this.frame = 1;
		},
		start: function() {
			var engine = this;
			this.loop = setInterval(function() {
				engine.newFrame();
			}, 1000/this.fps);
		},
		newFrame: function() {
			this.frame++;
			if (this.frame > this.instance.engine.fps) {
				this.frame = 1;
			}
			this.instance.canvas.update();
		}
	};

	return Engine;

})();
