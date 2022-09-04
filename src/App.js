import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import MenuCart from './components/layout/MenuCart';
import Navigation from './routes/Navigation';
import MenuBuy from './components/layout/MenuBuy';

function App() {
  return (
    <div className="App">
      <MenuBuy />
      <Navbar />
      <MenuCart />
      {/* Routes in application */}
      <Navigation />

    </div>
  );
}

export default App;
