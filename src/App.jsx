import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Unlock from './components/Unlock';
import Need from './components/Need';
import Earning from './components/Earning';
import Features from './components/Features';
import Service from './components/Service';
import Service1 from './components/Service1';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Unlock />
      <Need />
      <Earning />
      <Features />
      <Service />
      <Service1 />
    </>
  );
}

export default App;
