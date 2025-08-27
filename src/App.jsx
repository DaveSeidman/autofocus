import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Device from './routes/device';
import Apps from './routes/apps';
import Faqs from './routes/faqs';
import Contact from './routes/contact';
import Nav from './components/nav';
import './index.scss';

const App = () => {



  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/device" element={<Device />}></Route>
        <Route path="/apps" element={<Apps />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

    </div>
  );
}


export default App;
