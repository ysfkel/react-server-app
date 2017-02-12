import React from 'react';
import { Link } from 'react-router';


const UserAd=({item})=>{

    return(
              
 
             <div className="list-item-container">
 
                <ListItem item={auto} url={'auto/'+auto.id}/>
           
             </div>
       

    );

}


export default UserAd;