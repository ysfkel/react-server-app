import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const SelectAdType=()=>{
    return(
        <div>
           <div className="select-ad-type-link">
                   <Link to={"/place-auto-ad"}>  <RaisedButton label="AUTOS" primary={true} className="gt-form-field" /></Link>
           </div>
            <div className="select-ad-type-link">
                <Link to={"/place-auto-property"}>
                  <RaisedButton label="PROPERTY FOR RENT" primary={true} className="gt-form-field" />
                </Link>
                
           </div>
            <div className="select-ad-type-link">
                <RaisedButton label="PROPERTY FOR SALE" primary={true} className="gt-form-field" />
           </div>
             <div className="select-ad-type-link">
                <RaisedButton label="JOBS" primary={true} className="gt-form-field" />
           </div>
            
        </div>
    )
}

export default SelectAdType;