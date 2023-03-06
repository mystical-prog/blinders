import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import DashBoard from './views/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='dashboard' element={<DashBoard/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);