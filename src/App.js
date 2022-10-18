import React from 'react';
import Navbar from './components/layout/Navbar';
import Navigation from './routes/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Routes in application */}
      <Navigation />

    </div>
  );
}

export default App;
