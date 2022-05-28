import React from "react";
import './popup.css'

class Popup extends React.Component {
  state = {}
  render() {
    return (this.props.trigger) ? ( 
      <div className="popup">
     <div className="popup-inner">
       <div>
         <label>Update Shoe Name: </label>
         <input type='text' value={this.state.value}></input>
         <label>Update Shoe Price: </label>
         <input type='text' value={this.state.value}></input>
       </div>
       <button onClick={()=>this.props.togglePopup()} className="close-btn">Close</button>
     </div>
  </div> 
  ): "";
  }
}

export default Popup;