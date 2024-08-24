import React, { createContext } from 'react';
import Login from './Login';

import ChildA from './components/ChildA'
import NotFound from './components/NotFound';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import HomeOne from './HomeOne';
import About from './components/About';
import Navbar from './components/Navbar';
function App() {

  return (
    <>
      {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route >
        <Route path='/list' element={<ChildA />}></Route > */}
      {/* <Route path='*' elemen={<NotFound />}></Route> */}
      {/* <Route path='*' element={<NotFound />} />

      </Routes > */}

      <Header />
      <Routes>
        <Route path="/" element={<HomeOne></HomeOne>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>


    </>
  );
}

export default App;


