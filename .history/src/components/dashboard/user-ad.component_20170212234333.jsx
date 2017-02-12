import React from 'react';
import { Link } from 'react-router';


const UserAd=({item})=>{

    return(
              
 
                       <div className="gt-card"> 
                              <div className="gt-card-icon-left">
                                  <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
                              </div>
                              <div className="gt-card-content">

                              </div>
                              <div className="gt-card-icon-right">
                                  <div>
                                      <div>AED</div>
                                      <div>25</div>
                                  </div>

                              </div>

                        </div>
      
       
       

    );

}


export default UserAd;