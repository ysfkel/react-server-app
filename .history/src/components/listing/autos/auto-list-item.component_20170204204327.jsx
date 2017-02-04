import React from 'react';
import ListItem from '../shared/list-item/list-item.component.jsx';
import { Link } from 'react'
const Auto=({auto})=>{

    return(
     <Link to={'details/'+item.id}>
        <ListItem item={auto}/>
    </Link>
    );

}


export default Auto;