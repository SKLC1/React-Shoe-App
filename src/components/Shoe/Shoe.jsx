import React, { Component } from 'react';
import './shoe.css'


function Shoe ({shoe, handleDelete, togglePopup}){
  return (
    <div className='shoe-cont'>
      <div className='shoe-stats'>
       <img src={shoe.img}></img>
       <p>Model: {shoe.name}</p>
       <p>Price: ${shoe.price}</p>
      </div>
      <div className='btn-cont'>
        <button id={shoe.id} onClick={(e)=>handleDelete(e.target.id)}>Delete</button> 
        <button id={shoe.id} onClick={(e)=>{togglePopup(e.target)}}>Edit</button> 
      </div>
    </div>
  )
}
 
export default Shoe;