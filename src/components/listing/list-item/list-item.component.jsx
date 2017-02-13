import React, {Component } from 'react';
import Thumbnail from '../../shared/image/thumbnail/thumbnail.component.jsx';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Price from '../../listing/list-item/list-item-price.jsx';
import AdShrortInfo from './ad-short-info.component.jsx';
import ListItemTitle from './list-item-title.jsx';
import  Emailmodal  from '../../shared/email-modal/email-modal.component.jsx';
import CallButton from '../../shared/buttons/call-button.component.jsx';
import ContactActions from '../../shared/contact-actions/contact-actions.component.jsx'



export default class ListItem extends Component{

      constructor(){
          super();
          this.state={
             item:{url:''}
          }
      }

      componentDidMount(){
          this.setState({

          })
      }
    
    render(){

            return(

            <div className="list-item">
                    <Card>
                    <Link to={this.props.url}>
                    <CardMedia overlay={<CardTitle title={this.props.item.title} subtitle="Overlay subtitle" />}>
                        <Thumbnail url={`assets/images/${this.props.item.url}`} />
                    </CardMedia>
                    </Link>
                    <CardText>
                        <ListItemTitle data={this.props.item.title}></ListItemTitle>
                        <Price price={this.props.item.price}></Price>
                        <AdShrortInfo dataCollection={[this.props.item.model,this.props.item.mileage]}></AdShrortInfo>
                    </CardText>
                    <CardActions>
                        <ContactActions item={this.props.item}/>
                    </CardActions>
                </Card>
            </div>

        );
    }

}



