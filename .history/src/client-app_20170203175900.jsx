import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/routing/AppRouting';

window.addEventListener("load", (e) => {
            ReactDOM.render(<AppRoutes/>,document.getElementById("app"))
            });