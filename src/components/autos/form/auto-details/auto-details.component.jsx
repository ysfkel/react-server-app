import React from 'react';

export default class AutoDetailsForm extends React.Component{

      render(){
          return(
              <div>
                    <div>
                        <label htmlFor="">Make</label>
                        <select name="" id=""></select>
                    </div>
                     <div>
                         <label htmlFor="">Model</label>
                        <select name="" id=""></select>
                    </div>
                    <div>
                        <label htmlFor="">Trim</label>
                          <select name="" id=""></select>
                    </div>
                    <div>
                        <label htmlFor="">Year</label>
                          <select name="" id=""></select>
                    </div>
                    <div>
                        <label htmlFor="">Kilometers</label>
                           <select name="" id=""></select>
                    </div>
                     <div>
                        <label htmlFor="">Body Type</label>
                          <select name="" id=""></select>
                    </div>
                     <div>
                        <label htmlFor="">Engine Size</label>
                          <select name="" id=""></select>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>

              </div>
          );
      }

}