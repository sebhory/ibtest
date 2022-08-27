import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Login from './component/Login'
import Home from './component/Home'
import Page404 from './component/Page404';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}/>
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
