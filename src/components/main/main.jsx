import {Component} from 'react'
import Products from '../products/products';

class Main extends Component {
  render() { 
    return (
      <div>
        <Homepage/>
        <Products/>
      </div>
    );
  }
}
class Homepage extends Component {
  render() { 
    return (
      <div>
        tet
        {/* <Link to="/products"><h1>Our Shoes</h1></Link> */}
      </div>
    );
  }
}
 
export default Main;