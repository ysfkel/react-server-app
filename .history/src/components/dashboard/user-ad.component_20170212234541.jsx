import React from 'react';
import { Link } from 'react-router';
import FontIcon from 'material-ui/FontIcon';

const UserAd=({item})=>{

    return(
              
 
                       <div className="gt-card"> 
                              <div className="gt-card-icon-left">
                                  <FontIcon className="material-icons">home</FontIcon>
                                  <h3>{item.title}</h3>

                              </div>
                              <div className="gt-card-content">

                              </div>
                              <div className="gt-card-icon-right">
                                 
                              </div>

                        </div>
      
       
       

    );

}


export default UserAd;