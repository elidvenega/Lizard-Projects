import React from 'react';
import './image.css';
import logo from './logo.png';

 const Image = () => {
  return (
   <React.Fragment>
    <div className="eric">
    <div className="heading">
    Lizard Project</div>
    <h1 className="info">Using React</h1>
    <img src={logo} style={{width:"100px"}} alt="logo" />
    </div>
    </React.Fragment>
  )
}

export default Image;
