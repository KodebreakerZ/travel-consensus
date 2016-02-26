var React = require('react');
var ReactDOM = require('react-dom');

var TaskItem = React.createClass({

  setInitialState: function() {
    return {
      selected: 'inactive'
    }
  },

  componentDidMount: function() {
    setInterval(this.updateClass, 2000);
  },

  updateClass: function() {
    console.log('this state ', this.state);
    if (this.props.task.id === window.globalStateTaskId) {
      this.setState( {selected: 'selected-task'} );
    } else {
      this.setState( {selected: 'inactive'} );
    }
  },

  clickHandler: function() {
    window.globalStateTaskId = this.props.task.id;
  },

  render: function() {

    // var getClass = function() {
    //   if (this.state.selected === 'selected-task') {
    //     return "task-item";
    //   } else {
    //     return "task-item";
    //   }
    // };

    // var classN = getClass();

    // var classN = "{this.state.selected} task-item";
    return (
      <div className="task-item" onClick={this.clickHandler}>
        <p>{this.props.task.name}</p>
      </div>
    )
  }
})

module.exports = TaskItem;
