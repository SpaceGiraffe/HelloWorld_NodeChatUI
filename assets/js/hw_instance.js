/*
	Name:          hw_instance.js
	Author:        Nathan Buchar
	Last Modified: Feb. 23, 2014
	Description:   Singleton object representing the game Instance.
*/

"use strict";

window.HelloWorld.Instance = (function() {

	function Instance(app) {
		this.app
		this.canvas;
		this.engine;
		this.users;
		this.sprites;
		this.environment;

		this.init(app);
	}

	Instance.prototype = {
		init: function(app) {
			this.app = app;
			this.environment = new Environment(this);

			this.users = [];
			this.sprites = [];

			return this;
		},
		createCanvas: function(element, width, height, context) {
			// create a new Canvas
			this.canvas = new Canvas(this, element, width, height, context);

			// create a new Canvas Engine
			this.engine = new Canvas.Engine(this, this.app.config().fps);

			return this;
		},
		start: function() {
			// start the Engine if the Engine has been instantiated
			if(this.engine) {
				this.engine.start();
			} else {
				throw 'Cannot start Instance: Canvas.Engine has not been instantiated.';
			}

			return this;
		},
		addUser: function() {
			// create a new User singleton
			var user = new User(this);
			this.users.push(user);
			return user;
		},
		addToStage: function(sprite) {
			this.sprites.push(sprite);

			return sprite;
		},
		removeFromStage: function(sprite) {
			// index of Sprite in array
			var i = this.sprites.indexOf(sprite);

			// splice Sprite from array via index
			this.sprites.splice(i, 1);

			return this;
		},

		// accessors
		getCanvas: function() {
			return this.canvas;
		},
		getContext: function() {
			return this.canvas.getContext();
		}
	};

	return Instance;

})();

var Instance = window.HelloWorld.Instance;
