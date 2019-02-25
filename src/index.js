import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import PageRouter from './assets/js/PageRouter';

ReactDOM.render(
    
    <BrowserRouter>
        <PageRouter />
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
