"use strict";

window.HelloWorld.User = (function(){
	
	function User(instance) {
		this.instance;
		this.resources;
		
		this.init(instance);
	}
	
	User.prototype = {
		init: function(instance) {
			this.instance = instance;
			this.resources = [];
			
			return this;
		},
		getResources: function() {
			return this.resources;
		},
		addResource: function(resource) {
			this.resources.push(resource);
			return this;
		}
	};
	
	return User;
	
})();

var User = window.HelloWorld.User;