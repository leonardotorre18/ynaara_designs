import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Jumbotron from './components/layout/Jumbotron';
import Home from './views/Home';
import MenuCart from './components/layout/MenuCart';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MenuCart />
      <Jumbotron />
      <Home />
    </div>
  );
}

export default App;
