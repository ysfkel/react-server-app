import React from 'react';

import Listing from '../../shared/listing/listing.component.jsx';

import axios from 'axios';
import Auto from '../item/auto-list-item.component.jsx';
//import ExecutionEnvironment from 'exenv';
//import Deck from 'react-slide-deck';
//import PageContainer from 'react-page-transitions';
//var Deck = ExecutionEnvironment.canUseDOM ? require('react-slide-deck').Deck : null;//React.DOM.div;

export default class AutosList extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

     static fetchData() {
         return {
             name:'yusuf kelo'
         }
     } // will be used for server side rendering

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
                  <div>
                        <div style={styles.root}>
                            <GridList style={styles.gridList} cols={2.2}>
                            {this.state.data.map((tile) => (
                                <GridTile
                                key={tile.img}
                                title={tile.title}
                                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                                titleStyle={styles.titleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                >
                                <img src={tile.img} />
                                </GridTile>
                            ))}
                            </GridList>
                        </div>
                     {/*{
                       this.state.data.map((item,i)=><Auto key={i} auto={item}/>)
                     }*/}
                     {/*<Listing list={this.state.data} />*/}
                  </div>
                   <script dangerouslySetInnerHTML={ { __html: 'window.PROPS=' + JSON.stringify(data) } }/>
              </div>
          
               )
       
          // }
        
      }

}

