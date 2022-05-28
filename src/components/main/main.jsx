import {Component} from 'react'
import Products from '../products/products';
import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom' 

class Main extends Component {
  render() { 
    return (
      <div>
        <Router>
          <Routes>
           <Route path='/' element={<Homepage/>}></Route>
           <Route path='/products' element={<Products/>}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
class Homepage extends Component {
  render() { 
    return (
      <div>
        Homepage
        <Link to="/products"><h1>Our Shoes</h1></Link>
      </div>
    );
  }
}
 
export default Main;