import React, { Component } from 'react';
import './shoe.css'

function Shoe ({shoe}){
  return (
    <div className='shoe-cont'>
      <div className='shoe-stats'>
       <img src={shoe.img}></img>
       <p>Model: {shoe.name}</p>
       <p>Price: ${shoe.price}</p>
      </div>
      <div className='btn-cont'>
        <button>Delete</button> 
        <button>Edit</button> 
      </div>
    </div>
  )
}
 
export default Shoe;