import React from 'react';
import { Link } from 'react-router';
import FontIcon from 'material-ui/FontIcon';

const UserAd=({item})=>{

    return(
              
 
                       <div className="gt-card user-ad-card">                            
                                 <div>
                                      <span>{item.title}</span>
                                 </div>
                                 <div>
                                      <span>Edit</span>
                                 </div>
                        </div>
      
       
       

    );

}


export default UserAd;