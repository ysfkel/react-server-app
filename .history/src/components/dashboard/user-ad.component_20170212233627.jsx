import React from 'react';
import ListItem from '../../listing/list-item/list-item.component.jsx';
import { Link } from 'react-router';


const Auto=({auto})=>{

    return(
              
 
             <div className="list-item-container">
 
                <ListItem item={auto} url={'auto/'+auto.id}/>
           
             </div>
       

    );

}


export default Auto;