import React from 'react';
import { Link } from 'react-router';
import FontIcon from 'material-ui/FontIcon';

const UserAd=({item})=>{

    return(
              
 
                       <div className="gt-card"> 
                          
                                  <FontIcon className="material-icons">home</FontIcon>
                                  <h3>{item.title}</h3>

                             

                        </div>
      
       
       

    );

}


export default UserAd;