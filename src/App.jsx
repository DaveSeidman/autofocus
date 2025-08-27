import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Device from './routes/device';
import Apps from './routes/apps';
import Faqs from './routes/faqs';
import Contact from './routes/contact';
import './index.scss';

const App = () => {



  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<div className="home"></div>}></Route>
        <Route path="/device" element={<Device />}></Route>
        <Route path="/app" element={<Apps />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

      </Routes>

    </div>
  );
}


export default App;
