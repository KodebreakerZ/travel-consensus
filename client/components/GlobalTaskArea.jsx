var React = require('react');
var ReactDOM = require('react-dom');
var SuggestionList = require('./SuggestionList.jsx');
var SuggestionItem = require('./SuggestionItem.jsx');
var MessageList = require('./MessageList.jsx');
var MessageItem = require('./MessageItem.jsx');
// var Post = require('../requests/post.js')

GlobalTaskArea = React.createClass({
  handleClick: function(event){
    var headers = {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
      "access-control-allow-headers": "content-type, accept",
      "access-control-max-age": 10, // Seconds.
      'Content-Type': "application/json"
    };
    event.preventDefault();

    // Post.newMessage();
    console.log('handleClick running');

    $.ajax({
      headers: headers,
      method: 'POST',
      url: '/task/' + 1 + '/message',
      data: JSON.stringify({ 
        content: 'New message posteddd',
        id_user: 2
       }),
      dataType: 'json'

    })

  },

  render: function() {
    return (
      <div className="main">
        <SuggestionList suggestions={this.props.suggestions} />

        <div className="chat-display">
          <MessageList messages={this.props.messages} />
        </div>
        <div className="message-input">
          <form action="postNewMessage" method="post">
            <input id="newMessage" type="text"></input>
            <button onClick={this.handleClick} type="submit">Post</button>
          </form>
        </div>
      </div>
    
    )
  }
});

module.exports = GlobalTaskArea;
