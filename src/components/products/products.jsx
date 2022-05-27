import React, { Component } from 'react';
import axios from 'axios';
import Shoe from '../Shoe/Shoe';


class Products extends Component {
  constructor(){
    super()
    this.state={ prodList: [] , newShoeName: '', newShoePrice: '',newShoeImage: ''}
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
      return <Shoe key={shoe.id} shoe={shoe}/>
    })
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
        {this.insertProducts()}
      </div>
    );
  }
}
 
export default Products;