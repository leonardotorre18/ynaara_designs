import React, {useState} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Jumbotron from './components/layout/Jumbotron';
import Home from './views/Home';
import ShoppingCart from './components/pure/ShoppingCart';


function App() {
  const [showShoppigCart, setShowShoppingCart] = useState(false);

  return (
    <div className="App">
      <Navbar setShowShoppingCart={setShowShoppingCart} />
      <Jumbotron />
      <Home />
      {
        showShoppigCart && <ShoppingCart />
      }
      
    </div>
  );
}

export default App;
