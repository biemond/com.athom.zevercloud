'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {
	
	onInit() {
		this.log('ZeverCloud app is running...');
	}
	
}

module.exports = MyApp;