import logo from './logo.svg';
import './App.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slideshow from './compoment/header/Slideshow';
import Navbark from './compoment/header/Navbark';
import { useState } from 'react';
import Header from './compoment/header/Header';
import textrun from './compoment/header/Textrun';
import Textrun from './compoment/header/Textrun';
import Usereff from './compoment/contex/f8/Usereff';
import { Routes, Route, Link } from "react-router-dom";
import UseCallBackk from './compoment/contex/f8/UseCallBackk';
import Usememoo from './compoment/contex/f8/Usememoo';
import Homecontex from './compoment/contex/Homecontex';

function App() {
  var runtext = 'cccccccccccccc';
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/runtex" element={<Textrun runtext={runtext}/>} />
        <Route path="/memo" element={<Usereff/>} />
        <Route path="/usecallback" element={<UseCallBackk/>} />
        <Route path="/usememo" element={<Usememoo/>} />
        <Route path="/contex" element={<Homecontex/>} />
      </Routes>
    </div>
  );
}

export default App;
