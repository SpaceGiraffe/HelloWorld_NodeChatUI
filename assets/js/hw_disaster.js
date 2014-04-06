"use strict";

window.HelloWorld.Disaster = (function() {

	function Disaster() {}

	Disaster.prototype = {
		init: function() {
			this.render();
		},

		render: function() {
			if(this.instance) {
				this.instance.addToStage(this);
			} else {
				throw 'Cannot add sprite to stage; game instance has not been set.';
			}

			return this;
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

		update: function() {
			//
		},

		draw: function() {
			//
		}
	};

	return Disaster;

})();

var Disaster = window.HelloWorld.Disaster;
