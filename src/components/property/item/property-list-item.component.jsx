import React from 'react';
import ListItem from '../../listing/list-item/list-item.component.jsx';
import { Link } from 'react-router';

const Property=({property})=>{
    return(
        <Link to={'property/'+property.id}>
           <ListItem item={property}/>
        </Link>
    )
}


export default Property;