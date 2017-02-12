import React from 'react';

export default class AutoDescription extends React.Component{

    render(){
        return(
            <div>
                <header>
                  <h1>
                      Describe Your Car
                  </h1>
                </header>
                <div>
                    <input type="text"    className="gt-form-field"/>
                </div>
                   <div>
                    <input type="text"    className="gt-form-field"/>
                </div>
                <div>
                    <textarea    className="gt-form-field" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        )
    }

}