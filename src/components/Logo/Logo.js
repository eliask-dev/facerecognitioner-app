import React from "react";
import Tilt from "react-parallax-tilt";
import imagerecognition from './logo.png'
import './Logo.css';

const Logo = () => {
  return (
    <>
      <div className="ma4 mt0">
        <Tilt style={{ width: 150}}>
          <div className="innerTilt">
            <img alt="logo" src= { imagerecognition }/>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Logo;
