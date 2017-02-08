import React,{ Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class Emailmodal extends Component{

      constructor(){
          super();
            this.state = {
                open: false,
            };

           this.handleClose=this.handleClose.bind(this);
           this.handleOpen=this.handleOpen.bind(this);
      }

  handleOpen(e){
      e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
      console.log('e',e)
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
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
        <FlatButton   label="Email" onTouchTap={this.handleOpen} />
        <Dialog
          title="Send us your enquiry"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }

}


