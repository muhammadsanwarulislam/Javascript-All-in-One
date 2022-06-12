import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Object destructuring
function Clock({local}) {
  return (
    <div>
      <h2>It is {new Date().toLocaleTimeString(local)}.</h2>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock local="bn-BD" />); //pass parameter as object
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
