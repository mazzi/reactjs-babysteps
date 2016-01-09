var React 			= require('react');
var ReactDOM 		= require('react-dom');

var h1 	= React.DOM.h1({ className : 'header', key: 'header' }, 'This is React');
var p 	= React.DOM.p({className : 'content', key: 'content'}, 'And that\'s how it works');

var reactFragment = [ h1, p ];

var firstSection = React.createElement('div', {className : 'first-container'}, reactFragment);

// JSX
var listOfItems = <ul className="list-of-items">
					<li className="item-1">Item 1</li>
					<li className="item-2">Item 2</li>
					<li className="item-3">Item 3</li>
				  </ul>;

var secondSection = React.createElement('div', {className : 'second-container'}, listOfItems);

var contentSection = [ firstSection, secondSection ];

var section = React.createElement('div', {className : 'container'}, contentSection);

ReactDOM.render(section, document.getElementById('react-application'));
