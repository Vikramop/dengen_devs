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
import Service2 from './components/Service2';
import Service3 from './components/Service3';
import Clients from './components/Clients';
import Chains from './components/Chains';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

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
      <Service2 />
      <Service3 />
      <Clients />
      <Chains />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
