import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Textrun from '../header/Textrun';

const slideImages = [
  'https://reactplus.com/images/slideShow/slide1.jpg',
  'https://reactplus.com/images/slideShow/slide2.jpg',
  'https://reactplus.com/images/slideShow/slide3.jpg',
];
const Slideshow = ({langgua}) => {
  // console.log('mmm',langgua)
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              {
                langgua.map((vl,ix)=>(
                  <span key={ix}><h1>{vl.Vlua1}</h1> <p>{vl.Vlua2}</p></span>
                ))
              }
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            {
                langgua.map((vl,ix)=>(
                  <span key={ix}><h1>{vl.Vlua3}</h1><p>{vl.Vlua4}</p></span>
                ))
              }
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Mệt quá ko làm icon đâu He He (サービス)</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;