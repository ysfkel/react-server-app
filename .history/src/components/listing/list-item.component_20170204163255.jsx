import React from 'react';


const ListItem=({item})=>{
     console.log('item',item)
        return(
              <div>
                <div className="image-preview"></div>
                <div className="item-info">
                       <div>
                           {item.title}
                       </div>
                       <div>
                           <p>
                               {}
                           </p>
                       </div>
                </div>

              </div>  
        );

}

export default ListItem;