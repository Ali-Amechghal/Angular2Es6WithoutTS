import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';
import {AppComponent} from './app.component';


let boot = document.addEventListener('DOMContentLoaded' , ()=>{
	bootstrap(AppComponent);
});

module.exports = boot;