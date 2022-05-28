import React, { Component } from 'react';
import axios from 'axios';
import Shoe from '../Shoe/Shoe';
import Popup from '../editPopup/popup';
import './products.css'


class Products extends Component {
  constructor(){
    super()
    this.state={ prodList: [] , newShoeName: '', newShoePrice: '',newShoeImage: '', isPopup: false}
  }
  getProducts=async()=>{
   const { data } = await axios.get('https://628f71e60e69410599dc83b9.mockapi.io/Shoes')
    console.log(data)
    this.setState({prodList: data})
  }
  handleInputChange=({ target })=>{
    this.setState({[target.id]: target.value})
  }
  handleCreateShoe=()=>{
    const newShoe = {
      name: this.state.newShoeName,
      price: this.state.newShoePrice,
      img: this.state.newShoeImage,
    };
    try{
      axios.post('https://628f71e60e69410599dc83b9.mockapi.io/Shoes',newShoe)
      this.setState((prev)=>{ return{prodList: [...prev.prodList, newShoe]} })
    } catch (e){
      console.log(e);
    }
  }
  insertProducts=()=>{
    return this.state.prodList.map((shoe)=>{
      return <Shoe key={shoe.id} shoe={shoe} handleDelete={this.handleDelete}
      togglePopup={this.togglePopup} />
    })
  }
  handleDelete=(id)=>{
    const deletedShoe = axios.delete(`https://628f71e60e69410599dc83b9.mockapi.io/Shoes/${id}`) 
    this.setState((prev)=>{
      const newProdList = prev.prodList.filter((shoe)=> shoe.id !== id)
      return { prodList: newProdList }
    })
  }
  togglePopup=(target)=>{
    if (target !== undefined) {
      this.handleEdit(target.id)
    }
    !this.state.isPopup?
    this.setState({isPopup: true}):
    this.setState({isPopup: false})
  }
  handleEdit=(id)=>{
    console.log(id);
  }
  componentDidMount(){
    this.getProducts()
  }
  render() { 
    return (
      <div>
        <div className='new-shoe-cont'>
          <h1>Sell Your Shoe!</h1>
          <input id='newShoeName' onChange={this.handleInputChange} value={this.state.newShoeName} 
          placeholder="Shoe Name"/>
          <button onClick={this.handleCreateShoe}>Add</button>
          <input id='newShoeImage' onChange={this.handleInputChange} value={this.state.newShoeImage} 
          placeholder="Shoe Price"/>
        </div>
        <div className='products-cont'>
        {this.insertProducts()}
        </div>
        <Popup trigger={this.state.isPopup} togglePopup={this.togglePopup}></Popup>
      </div>
    );
  }
}
 
export default Products;