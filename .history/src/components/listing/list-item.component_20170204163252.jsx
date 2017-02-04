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
                           import React from 'react'
                           
                           const component = (props) => {
                               return(
                                   <div>
                                       {children}
                                   </div>
                               )
                           }
                           
                           export default component
                       </div>
                </div>

              </div>  
        );

}

export default ListItem;