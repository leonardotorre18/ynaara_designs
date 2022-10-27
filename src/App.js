import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import PriceAbsolute from './components/layout/PriceAbsolute';
import Navigation from './routes/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toaster
        containerStyle={{
          position: 'fixed',
          top: '5rem',
        }}
      />
      <Navigation />
      <PriceAbsolute />
    </div>
  );
}

export default App;
