import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from './App';
import '../src/assets/GlobalStyles/reset.scss'
import { UserPage } from './pages/UserPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
);

