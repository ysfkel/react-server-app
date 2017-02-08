
import React, { Component } from 'react';
import Slider from 'react-slick'



export default class Thumnailslider extends Component{

    render(){

        let settings={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow1,
            slidersToScroll:1
        }
        return(
        <Slider {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
        </Slider>
        )
    }

}

