/*
	Name:          hw_app.js
	Author:        Nathan Buchar
	Last Modified: Mar. 18, 2014
	Description:   Global App file
*/

var App;

"use strict";

(function($){

	window.HelloWorld = (function() {
		var _, instance = null, configs = null;

		return {
			init: function() {
				_ = this;

				_.loadConfig();

				return _;
			},
			loadConfig: function() {
				console.log("App: Loading configurations ...");
				$.getJSON('data/config.js').done(function(json) {
					console.log("App: Successfully loaded configurations");

					// set configs; welcome message
					configs = json.config;
					console.log('App: Welcome to "' + _.config().name + '" build v' + _.config().version);

					// continue with application
					instance = _.createInstance();

					// run application bootstrap
					_.bootstrap();
				}).fail(function(jgxhr, textStatus, error) {
					console.log("App: Error loading configurations");
					throw textStatus;
				});
			},
			createInstance: function() {
				var i = new Instance(this);

				i.createCanvas(
					$('body'),         // parent element
					1024,              // width
					768,               // height
					'2d'               // context
				).start();

				return i;
			},
			bootstrap: function() {

				/** Write Developer and Application Code Here **/

				// dev controllers
				var snow, clear;

				$('body').append(snow = $('<button>Make it Snow</button>'));
				$('body').append(clear = $('<button>Clear</button>'));

				snow.on('click', function() {
					instance.environment.set('snow');
				});

				clear.on('click', function() {
					instance.environment.clear();
				});

				// SCHEMA PineTree(instance, x, y, scale, fpf)
				new App.BirchTree(instance, 800, 310, 0.4, 20);
				new App.PineTree(instance, 100, 300, 0.5, 30);
				new App.PineTree(instance, 700, 400, 0.4, 20);
				new App.BirchTree(instance, 20, 210, 0.5, 23);
				new App.BirchTree(instance, 300, 300, 0.4, 30);
				// set environment to 'snowing'.
				// instance.environment.set('snowing');
				//
				// // clear environmental effect after 4 seconds
				// setTimeout(function() {
				// 	instance.environment.clear();
				// }, 1000*4);

				/** ** **/

			},
			getInstance: function() {
				return instance;
			},
			config: function() {
				return configs;
			}
		};

	})();

	window.HelloWorld.Utils = (function() {
		return  {
			loadImage: function(src) {
				var image = new Image();
				image.src = src;
				return image;
			},
			drawRect: function(ctx, x, y, w, h, color) {
				ctx.rect(x, y, w, h);
				ctx.fillStyle = color;
				ctx.fill();
			},
			testForCollision: function(object, x, y) {
				var left = object.x,
						right = object.x + object.sWidth;
				var top = objects.y, bottom = objects.y + object.sHeight;
				return (right >= x &&
								left <= x &&
								bottom >= y &&
								top <= y);
			},
			testObjectsForCollision: function(objects, x, y) {
		    var isCollision = false;
		    for (var i = 0, len = objects.length; i < len; i++) {
	        var left = objects[i].x, right = objects[i].x + objects[i].sWidth;
	        var top = objects[i].y, bottom = objects[i].y + objects[i].sHeight;
	        if (right >= x
            && left <= x
            && bottom >= y
            && top <= y) {
            isCollision = objects[i];
	        }
		    }
		    return isCollision;
			}
		}
	})();

})(jQuery);

$(function() {

	var now = new Date();
	console.log('\n\n\n\n'+now);

	/** begin simulation **/

	App = window.HelloWorld.init();

});
