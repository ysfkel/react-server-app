import React,{ Component } from 'react';
import Badge from './badge.component.jsx';


export default class BadgeList extends Component{
        
        constructor(){
            super();
            this.state={
                badgeList:[1,2,3,4,5]
            }
        }

        render(){
            return(
                <div>
                    {
                        this.state.badgeList.map((badge,i)=><Badge key={i} badge={badge} />)
                    }
                </div>
            );
        }
}