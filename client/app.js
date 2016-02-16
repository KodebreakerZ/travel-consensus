var React = require('react');
var ReactDOM = require('react-dom');
var GlobalTopBar = require('./components/GlobalTopBar.jsx');
var GlobalSidebar = require('./components/GlobalSidebar.jsx');

// Currently only using React & ReactDOM require to test if this will show on html page
// 
// 
// This component will be changed later to be the connection for all of our react view components
// 
// 
// Check README for how we start everything straight from git clone ( npm i, npm start, etc )

// Adding options for use in:
  // TaskItem
    // Modeling the TaskItem title input (passed in GlobalSidebar.jsx, mapped in TaskList.jsx)

var options = {
  tasks: [
    'Where to stay',
    'Travel details',
    'Car rental?'
  ]
};


var topbar = React.createElement(GlobalTopBar);
ReactDOM.render(topbar, document.getElementById('react-main-mount'));

var sidebar = React.createElement(GlobalSidebar, options);
ReactDOM.render(sidebar, document.getElementById('react-sidebar-mount'));

// ReactDOM.render (<GlobalTopBar />, document.getElementById('react-main-mount'));
// ReactDOM.render (<GlobalSidebar />, document.getElementById('react-sidebar-mount'));


// on the index.html located within client/public/index.html, we've added "<div id='react-main-mount'></div>" within the body tag
// this appends the react view into the html page which uses the app-bundle.js
// 
// we'll continue refactoring the dom elements into individual react component as we progress. Be explicit when naming files.
// 
// script for app-bundle.js is located at the bottom before the </body> tag