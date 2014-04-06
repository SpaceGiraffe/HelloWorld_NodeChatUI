/*
	Name:          hw_environment.js
	Author:        Nathan Buchar
	Last Modified: Mar. 16, 2014
	Description:   Singleton object representing the game Environment.
*/

"use strict";

window.HelloWorld.Environment = (function() {

	function Environment(instance) {
		this.instance = instance;
		this.dictionarySource = 'data/dictionary.js';
		this.dictionary = null;
		this.resources = [];
		this.condition = null;

		this.init();
	}

	Environment.prototype = {
		init: function() {
			this.newResource('humidity');
			this.newResource('pressure');
			this.newResource('temperature');
			this.newResource('wind');

			this.dictionary = this.loadDictionary();

			// var that = this;
			// this.checkValues = setInterval(function() {
			// 	that.simulate();
			// }, 1000);

			return this;
		},
		loadDictionary: function() {
			var that = this;
			$.getJSON(this.dictionarySource).done(function(json) {
				that.dictionary = json;
			}).fail(function(jgxhr, textStatus, error) {
				throw textStatus;
			});
		},
		newResource: function(resourceName, initialValue) {
			var val = initialValue ? initialValue : 0;
			this.resources.push(resourceName, new Resource(val));
			return this;
		},
		simulate: function() {
			$(this.resources).each(function() {
				console.log(this);
			});
		},
		set: function(condition) {
			console.log('Environment: Condition set to \'' + condition + '\'');
			this.condition = condition;
		},
		clear: function() {
			console.log('Environment: \'' + this.condition + '\' condition cleared');
			this.condition = null;
		}
	};

	return Environment;

})();

var Environment = window.HelloWorld.Environment;
