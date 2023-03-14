import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Echo from 'laravel-echo';
import { BrowserRouter } from 'react-router-dom';
import DashBoard from './components/DashBoard';
const root = ReactDOM.createRoot(document.getElementById('root'));
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.REACT_APP_WEBSOCKTES_KEY,
    cluster:process.env.REACT_APP_WEBSOCKTES_CLUSTER ,
    wsHost:process.env.REACT_APP_WEBSOCKTES_SERVER,
    // auth: {
    //     headers: {
    //         Authorization:'Bearer ' +"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NzcyMjMxMTksImV4cCI6MTY3NzIyNjcxOSwibmJmIjoxNjc3MjIzMTE5LCJqdGkiOiJXNW92b1BuaWVwbGJCTWcyIiwic3ViIjoiNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.NCMKzsRPYrXId4wkqNIZiH3nNwMzyMyBd8lsYRiFM_8"
    //     },
    // },
     // wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    wsPort: 6001,
    forceTLS:false,
    disableStats:true,
});

root.render(
  <BrowserRouter>
    {/* <App /> */}
    <DashBoard/>
  </BrowserRouter>
);