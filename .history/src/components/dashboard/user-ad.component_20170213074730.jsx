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
                                      <Link to={"/edit/property"}>Edit</Link>
                                 </div>
                        </div>
      
       
       

    );

}


export default UserAd;