import React from 'react';
import ListItem from '../../shared/list-item/list-item.component.jsx';
import { Link } from 'react-router';
const Auto=({auto})=>{

    return(
        <div >
            <Link to={'details/'+auto.id}>
              <ListItem item={auto}/>
            </Link>
        </div>
    );

}


export default Auto;