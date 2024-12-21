import React from 'react';
import ReactDOM from 'react-dom/client'; 
import HomePage from './components/HomePage';
import './components/Style.css'; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);
