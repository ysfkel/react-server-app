import React from 'react';


const Listing=({list})=>{


          return(
              <div>
              
                  <div>

                     {
                       list.map((item,i)=><ListItem key={} item={item}/>)
                     }

                  </div>
              </div>
          );
      

}

export default Listing;