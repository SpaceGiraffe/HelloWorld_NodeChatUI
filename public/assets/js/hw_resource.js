/*
	Name:          hw_resource.js
	Author:        Nathan Buchar
	Last Modified: Mar. 16, 2014
	Description:   Singleton object representing a game Resource.
*/

"use strict";

window.HelloWorld.Resource = (function() {

	function Resource(initialValue) {
		this.value = initialValue ? initialValue : 0;
	}

	Resource.prototype = {
		increaseBy: function(amount) {
			if (! amount) amount = 1;
			return this.value += amount;
		},
		decreaseBy: function(amount) {
			if (! amount) amount = 1;
			return this.value -= amount;
		}
	};

	return Resource;

})();

var Resource = window.HelloWorld.Resource;
