
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import  Emailmodal  from '../email-modal/email-modal.component.jsx';
import CallButton from '../buttons/call-button.component.jsx';



const ContactActions=({item})=>{

            return(
               <div>
                        <div className="contact-button">
                            <Emailmodal item={item}/>
                        </div>
                        <div className="contact-button">
                            <CallButton />
                        </div>
               </div>

        );
}

export default ContactActions;

