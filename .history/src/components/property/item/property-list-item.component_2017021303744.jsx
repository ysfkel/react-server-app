import React from 'react';
import ListItem from '../../listing/list-item/list-item.component.jsx';
import { Link } from 'react-router';

const Property=({property})=>{
    return(
           <div className="list-item-container">
 
                <ListItem item={property} url={'property/'+property.id}/>
           
             </div>


    )
}


export default Property;