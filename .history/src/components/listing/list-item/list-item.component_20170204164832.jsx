import React from 'react';
import './list-item.component.css';

const ListItem=({item})=>{
     console.log('item',item)
        return(
              <Link to="{details}">
            <div className="list-item">
                <div className="image-preview"></div>
                <div className="item-info">
                       <div>
                           {item.title}
                       </div>
                       <div>
                           <p>
                               {item.description}
                           </p>
                       </div>
                </div>

              </div>  
              </Link>
        );

}

export default ListItem;