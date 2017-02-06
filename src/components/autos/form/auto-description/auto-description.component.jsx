import React from 'react';

export default class AutoDescriptionForm extends React.Component{
        
        constructor(){
           super();
        }

        render(){
            return(
                <div>
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
            );
        }
} 