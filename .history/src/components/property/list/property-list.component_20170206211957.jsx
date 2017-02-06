import React from 'react';


import axios from 'axios';
import Property from '../item/property-list-item.component.jsx';

export default class PropertyList extends React.Component{


    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentWillMount(){
        let data=axios.get('http://localhost:5000/property')
        data.then((res)=>{
            this.setState({
                    data:res.data
            })
        });

    }

    render(){
        return(
            <div>
                <header>
                    <h1>Properties</h1>
                </header>
                <div>
                    {
                        this.state.data.map((item,i)=><Property key={i} property={item}/>)
                    }
                </div>
            </div>
        )
    }
}