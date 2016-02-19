var React = require('react');
var ReactDOM = require('react-dom');
var GlobalTopBar = require('./components/GlobalTopBar.jsx');
var GlobalSidebar = require('./components/GlobalSidebar.jsx');
var GlobalTaskArea = require('./components/GlobalTaskArea.jsx');

window.globalStateTripId = 1;
window.globalStateTaskId = 1;

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
      id: 1236, content: 'i like turtles, too',
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


var topbar   = React.createElement(GlobalTopBar);
var taskArea = React.createElement(GlobalTaskArea);

// Pass in the addNewTask function of the post.js helper file as a prop.
// We pass this method down to the TaskList child so that it can
// addNewTask. I think this might make global state easier but I'm
// still not sure how to implement it.
var sidebar  = React.createElement(GlobalSidebar, {
  addNewTask: require('./requests/post').addNewTask
});


topbar   = ReactDOM.render(topbar, document.getElementById('react-main-mount'));
sidebar  = ReactDOM.render(sidebar, document.getElementById('react-sidebar-mount'));
taskArea = ReactDOM.render(taskArea, document.getElementById('react-task-mount'));

var requestHandler = require('./requests/get')
requestHandler.setViewDataUpdateInterval(sidebar, taskArea, 2000);

/*
  on the index.html located within client/public/index.html, we've added
  "<div id='react-main-mount'></div>" within the body tag.
  this appends the react view into the html page which uses the app-bundle.js

  we'll continue refactoring the dom elements into individual react component as
  we progress. Be explicit when naming files.

  script for app-bundle.js is located at the bottom before the </body> tag
*/
