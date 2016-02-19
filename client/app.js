var React = require('react');
var ReactDOM = require('react-dom');
var GlobalTopBar = require('./components/GlobalTopBar.jsx');
var GlobalSidebar = require('./components/GlobalSidebar.jsx');
var GlobalTaskArea = require('./components/GlobalTaskArea.jsx');

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
  ],
  suggestions: [
    'Restaurant 1',
    'Restaurant 2',
    'Restaurant 3'
  ],
  messages: [
    {
      id: 1234, content: 'hey',
      id_task: 1, id_user: 1, nickname: 'John'
    },
    {
      id: 1235, content: 'i like turtles',
      id_task: 4, id_user: 2, nickname: 'Jacob'
    },
    {
      id: 1236, content: 'i like turtles',
      id_task: 6, id_user: 3, nickname: 'Ashley'
    },
    {
      id: 1237, content: 'as all internet debates, youre being a nazi',
      id_task: 8, id_user: 2, nickname: 'Jacob'
    }
  ],
  user: [
  {
    id: 1, username: 'user 1'
  },
  {
    id: 2, username: 'user 2'
  },
  {
    id: 3, username: 'user 3'
  },
  ]
};

console.log('requests/post require contents', require('./requests/post'))


//TODO: how to substitute options?
var topbar   = React.createElement(GlobalTopBar);
var sidebar  = React.createElement(GlobalSidebar, require('./requests/post'));
var taskArea = React.createElement(GlobalTaskArea, options);


topbar   = ReactDOM.render(topbar, document.getElementById('react-main-mount'));
sidebar  = ReactDOM.render(sidebar, document.getElementById('react-sidebar-mount'));
taskArea = ReactDOM.render(taskArea, document.getElementById('react-task-mount'));


var globalComponents = [ sidebar ];

var requestHandler = require('./requests/get')
requestHandler.setViewDataUpdateInterval(globalComponents, 2000);


// ReactDOM.render (<GlobalTopBar />, document.getElementById('react-main-mount'));
// ReactDOM.render (<GlobalSidebar />, document.getElementById('react-sidebar-mount'));


// on the index.html located within client/public/index.html, we've added "<div id='react-main-mount'></div>" within the body tag
// this appends the react view into the html page which uses the app-bundle.js
//
// we'll continue refactoring the dom elements into individual react component as we progress. Be explicit when naming files.
//
// script for app-bundle.js is located at the bottom before the </body> tag
