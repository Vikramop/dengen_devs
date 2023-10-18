import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Unlock from './components/Unlock';
import Need from './components/Need';
import Earning from './components/Earning';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Unlock />
      <Need />
      <Earning />
    </>
  );
}

export default App;
