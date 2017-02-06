import React from 'react';
import ListItem from './list-item/list-item.component.jsx';

const Listing=({list})=>{


          return(
              <div>
              
                  <div>

                     {
                       list.map((item,i)=><ListItem key={i} item={item}/>)
                     }

                  </div>
              </div>
          );
      

}

export default Listing;