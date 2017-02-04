import React from 'react';


const ListItem=({item})=>{
     console.log('item',item)
        return(
              <div clas>
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
        );

}

export default ListItem;