import React, { useContext, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './screens/index';
import DetailsDeliver from './screens/detailsDelivery';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
        <Route index  element={<Index />} />
        <Route path="/detail" element={<DetailsDeliver />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
