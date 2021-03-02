import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mainsearch from './pages/Mainsearch';
import reportWebVitals from './reportWebVitals';
import './styles/variables.scss'
import { TinterilloApp } from './TinterilloApp';

// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(<Animation />, document.getElementById('root'))
ReactDOM.render(<TinterilloApp />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
