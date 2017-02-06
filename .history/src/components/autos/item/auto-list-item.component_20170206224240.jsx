import React from 'react';
import ListItem from '../../listing/list-item/list-item.component.jsx';
import { Link } from 'react-router';

const Auto=({auto})=>{

    return(
  
            <div className="card">
              <Link to={'auto/'+auto.id}>
                <ListItem item={auto}/>
              </Link>
            </div>

    );

}


export default Auto;