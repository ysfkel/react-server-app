import React from 'react';

import Listing from '../../shared/listing/listing.component.jsx';

import axios from 'axios';
import Auto from '../item/auto-list-item.component.jsx';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
//import ExecutionEnvironment from 'exenv';
//import Deck from 'react-slide-deck';
//import PageContainer from 'react-page-transitions';
//var Deck = ExecutionEnvironment.canUseDOM ? require('react-slide-deck').Deck : null;//React.DOM.div;

 const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
     width: 500,
    height: 450,
    overflowY: 'auto',
  }
};

export default class AutosList extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

  



     componentWillMount () {
         let data=axios.get('http://localhost:5000/autos')
         data.then((res)=>{
   
             this.setState({
                   data:res.data
             });
         })
     }

     componentDidMount () {
        //  let data=axios.get('http://localhost:5000/autos')
        //  data.then((res)=>{
   
        //      this.setState({
        //            data:res.data
        //      });
        //  })
     }

     
      render(){
       //   console.log('ExecutionEnvironment',ExecutionEnvironment)
           const { data } = this.state // => const data = this.state.data
        //   console.log('Pa',Deck)

        
               return(

              <div >
                  <header>
                      <h1>Autos page</h1>
                  </header>
                  <div style={styles.root}>
                    <GridList style={styles.gridList} cols={2.2}>
                     {
                       this.state.data.map((item,i)=><Auto key={i} auto={item}/>)
                     }
                     {/*<Listing list={this.state.data} />*/}
                       </GridList>
                  </div>
                   <script dangerouslySetInnerHTML={ { __html: 'window.PROPS=' + JSON.stringify(data) } }/>
              </div>
          
               )
       
          // }
        
      }

}



