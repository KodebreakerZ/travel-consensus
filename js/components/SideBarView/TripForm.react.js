import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

export default class NewTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <button label="Dialog" className='new-trip' onTouchTap={this.handleOpen}>
        <i className='fa fa-plus-circle' /> New Trip
        </button>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={{width:"27rem"}}
          onRequestClose={this.handleClose}
        >
        <TextField 
          hintText="Title"
          style={{"marginLeft":"-5px","fontSize":"30px","width":"22rem"}}
        />

          <br/>
        <TextField
          hintText="Description"
          style={{"marginLeft":"1%"}}
        />

          <br/>
          <br/>

        <DatePicker 
          hintText="Pick a Date"
          style={{"marginLeft":"1%"}}
        />

        </Dialog>
      </div>
    );
  }
}
