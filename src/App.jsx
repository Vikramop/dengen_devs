import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Unlock from './components/Unlock';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Unlock />
    </>
  );
}

export default App;
