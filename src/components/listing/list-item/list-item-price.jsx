import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

const Price=({price})=>{

     return(
         <div>
             <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'AED'}></NumberFormat>

         </div>
     );
 
}


export default Price;