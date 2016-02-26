var React = require('react');
var ReactDOM = require('react-dom');
var SuggestionList = require('./SuggestionList.jsx');
var SuggestionItem = require('./SuggestionItem.jsx');
var MessageList = require('./MessageList.jsx');
var MessageItem = require('./MessageItem.jsx');

var GlobalTaskArea = React.createClass({
  getInitialState: function() {
    return {
      messagesInTask: [],
      suggestionsInTask: []
    }
  },

  handleNewMessage: function(e) {
    e.preventDefault();

    var newMessage = {
      content: $('.newMessageContent').val(),
      id_user: window.globalStateUserId

    }

    // clear newMessageContent field
    $('.newMessageContent').val('')

    this.props.addNewMessage(newMessage);

    var objDiv = document.getElementById("messageListDiv");
    objDiv.scrollIntoView(false);

    // intermediary setState; takes care of server-delay
    this.state.messagesInTask.push(newMessage)
    this.setState( {messagesInTask: this.props.messagesInTask} )

  },

  handleNewSuggestion: function(e) {
    
    if(!window.globalToken){
      alert('Please sign in.')
    }
      else {

    e.preventDefault();

    var newSuggestion = {
      suggestion: $('.newSuggestionContent').val(),
      id_user: window.globalStateUserId
    }

    // clear newSuggestionContent field
    $('.newSuggestionContent').val('')

    this.props.addNewSuggestion(newSuggestion);

    // intermediary setState; takes care of server-delay
    this.state.suggestionsInTask.push(newSuggestion)
    this.setState( {suggestionsInTask: this.props.suggestionsInTask} )

    }
   
  },

  render: function() {
    return (
      <div className="main">

        <SuggestionList suggestions={this.state.suggestionsInTask} />

        <div className="suggestion-display">
          <form onSubmit={this.handleNewSuggestion}>
          <p>Add suggestion:</p>
            <input className="newSuggestionContent" type="text"></input>
            <button type="submit">Post</button>
          </form>
        </div>

        <div className="chat-display">
          <MessageList messages={this.state.messagesInTask} />
        </div>

        <div className="message-input">
          <form onSubmit={this.handleNewMessage}>
            <input className="newMessageContent" type="text"></input>
            <button type="submit">Post</button>
          </form>
        </div>

      </div>
    )
  }
});

module.exports = GlobalTaskArea;
