import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
// const elem = <h1>hello world</h1>;
// const text = 'Hello world';
// const elem = (
//   <div>
//     <h2>Text: {text}</h2>
//     <input type="text" />
//     <button>Click</button>
//   </div>
// )

/*
работа под капотом 
const elem = React.createElement('h2', {className: 'green'}, 'Hellow world');

const element = {
  type: 'h2',
  props: {
    className: 'green',
    children: 'Hello world',
  }
} */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // elem,
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
