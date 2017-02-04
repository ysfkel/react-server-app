import React from 'react';
import ListItem from '../../shared/list-item/list-item.component.jsx';
import { Link } from 'react-router';
const Auto=({auto})=>{

    return(
     <Link to={'details/'+auto.id}>
        <ListItem item={auto}/>
    </Link>
    );

}


export default Auto;