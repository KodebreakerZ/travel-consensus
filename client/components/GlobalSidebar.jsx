var React = require('react');
var ReactDOM = require('react-dom');
var TaskList = require('./TaskList.jsx');
var TaskItem = require('./TaskItem.jsx');

GlobalSidebar = React.createClass({
  render: function() {
    <div class="sidebar">
      <div class="twelve columns sidebar-height">
        <div class="location-display">
          <img src="../public/images/mountain.png" />
          <i class="fa fa-circle fa-paper-plane-o fa-5x"></i>
          <h5>Las Vegas | 62</h5>
        </div>
        <TaskList />
      </div>
    </div>
    }
});

module.exports = GlobalSidebar;