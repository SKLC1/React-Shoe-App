import React from "react";
import './popup.css'

class Popup extends React.Component {
  constructor(){
    super()
    this.state = { newShoeName: '', newShoePrice: '', newImg: ''}
  }
  handleOnChange=({target})=>{
    this.setState({ [target.id]: target.value})
  }
  render() {
    return (this.props.trigger) ? ( 
      <div className="popup">
     <div className="popup-inner">
       <div>
         <label>Update Shoe Name: </label>
         <input id="newShoeName" onChange={this.handleOnChange} value={this.state.newShoeName}></input>
         <label>Update Shoe Price: </label>
         <input id="newShoePrice" onChange={this.handleOnChange} value={this.state.newShoePrice}></input>
         <label>New Image Url: </label>
         <input id="newImg" onChange={this.handleOnChange} value={this.state.newImg}></input>
       </div>
       <button onClick={()=>this.props.togglePopup()} className="close-btn">Close</button>
       <button onClick={()=>this.props.handleEdit(this.state.newShoeName, this.state.newShoePrice, this.state.newImg)}
        className="update-btn">Update</button>
     </div>
  </div> 
  ): "";
  }
}

export default Popup;