import React from 'react';


const Listing=({list})=>{


          return(
              <div>
              
                  <div>

                     {
                       list.map((item,i)=><ListItem)
                     }

                  </div>
              </div>
          );
      

}

export default Listing;