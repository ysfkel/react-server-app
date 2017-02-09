import React from 'react';
import axios from 'axios';


export default class Home extends React.Component{

      constructor(){
          super();
          this.state={
              fname:'',
              lname:'',
              features:[
                 
                  {
                       type:'type1',
                       items:[
                           "item 1",
                           "item 2",
                           "item 3"
                       ]
                  },
                  {
                      type:"type2",
                      items:[
                          "item 1",
                          "item 2",
                          "item 3"
                      ]
                  }

              ]
          }

          this.handleLnameChange=this.handleLnameChange.bind(this);
          this.handleFnameChange=this.handleFnameChange.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);

      }

    
      
      handleLnameChange(e){
          this.setState({
              fname:e.target.value
          })
      }

      handleFnameChange(e){
          this.setState({
              lname:e.target.value
          })
      }

      handleSubmit(e){
          console.log(e)
          this.setState({
              fullname:`${this.state.fname} ${this.state.lname}`
          })
      }

      render(){
          return(
                  <form action="">


                      {
                          this.state.features.map((item,key)=>{
                                 let listItem= item.items.map((it,i)=><li>{it}</li>)
                                 return <ul>{item.type}
                                     {listItem}
                                 </ul>
                          })
                      }
                      <span>Your name is {this.state.fname} {this.state.lname}</span>
                      <b>YOUR FULL NAME:{this.state.fullname}</b>
                      <div>
                           <label htmlFor="">First name</label>
                      <input type="text" value={this.state.fname} onChange={this.handleLnameChange} />
                      </div>


                      <div>
                          <label htmlFor="">Label name</label>
                      <input type="text" value={this.state.lname} onChange={this.handleFnameChange}/>
                      </div>

                      <input type="button" onClick={this.handleSubmit} value="save"/>
                  </form>
          );
      }

}