import React from 'react';

import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
