import React from 'react';
import 

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