import React from 'react';
import ListItem from '../../listing/list-item/list-item.component.jsx';
import { Link } from 'react-router';


const Auto=({auto})=>{

    return(
  
            <Link to={'auto/'+auto.id}>
              <ListItem item={auto}/>
            </Link>

    );

}


export default Auto;