"use strict";

window.HelloWorld.Sprite = (function() {

	function Sprite() {}

	Sprite.prototype = {
		init: function() {
			// load image
			this.image = App.Utils.loadImage('assets/img/' + this.source);

			// render to canvas
			this.render();

			return this;
		},

		// add Sprite to stage
		render: function() {
			if(this.instance) {
				this.instance.addToStage(this);
			} else {
				throw 'Cannot add sprite to stage; game instance has not been set.';
			}

			return this;
		},

		renderState: function() {
			//
		},

		// remove Sprite from stage and delete instance
		die: function() {
			if(this.instance) {
				this.instance.removeFromStage(this);
				delete this;
				return;
			} else {
				throw 'Cannot remove sprite from stage; game instance has not been set.';
			}

			return this;
		},

		// defacto update method (required)
		update: function() {
			//
		},

		// defact draw method (required)
		draw: function() {
			if(this.instance) {

				// fallback values
				var x, y, w, h, c;

				x = this.x ? this.x : 0;
				y = this.y ? this.y : 0;
				w = this.width ? this.width : 30;
				h = this.height ? this.height : 30;
				c = this.color ? this.color : 'red';

				// defacto draw function
				App.Utils.drawRect(this.instance.getContext(), x, y, w, h, c);
			} else {
				throw 'Cannot draw Sprite; game instance has not been set.';
			}
		}
	}

	return Sprite;

})();

var Sprite = window.HelloWorld.Sprite;
