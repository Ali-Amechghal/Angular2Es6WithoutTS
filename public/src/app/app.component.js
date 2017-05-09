import {Component} from 'angular2/core';
class AppComponent{

	static get annotations(){
		return [
			new Component({
				selector : 'my-app',
				template:`<h1>
					 This a first angular2 app using es6,enjoy ;)
				</h1>`
			})
		]
	}
	constructor(){

	}
}

export {AppComponent}
