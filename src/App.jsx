import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Navigation from './routes/Navigation';
import Footer from './components/layout/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
