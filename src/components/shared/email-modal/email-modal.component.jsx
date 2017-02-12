import React,{ Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import EmailForm from './email-form/email-form.component.jsx';
import EmailModalItemInfo from './email-modal-item-info.component.jsx';
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
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

    componentDidMount(){
    
        
  }

  render() {


     const iconStyles = {
              marginRight: 24,
                padding:30,
                color:'red'
            };

    const actions = [
 
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
          />,
          <RaisedButton
            label="Send Message"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
          />,
    ];



    return (
    
      <div>
          
        <FlatButton primary={true}  label="Email" onTouchTap={this.handleOpen} />
            <Dialog
       
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
            <div className="email-modal-listing-info-container">
                <EmailModalItemInfo item={this.props.item}/>
            </div>
              <div className="email-modal-email-form-container">
                <EmailForm/>
              </div>
        </Dialog>
      </div>
    );
  }

}


