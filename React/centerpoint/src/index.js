import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function getOrange(user) {
  if(user) {
    return <h1>Hello {user}</h1>
  }
  return <h2>Hello stanger</h2>
}
const element = <h1>{getOrange('muhammad')}</h1>

const swapNum = (function(array,num1,num2){
  let tmp = array[num1]
    array[num1] = array[num2]
    array[num2] = tmp
    return (
      <React.StrictMode>
      <App />
      <h1>{array}</h1>
    </React.StrictMode>
    )
})([10,2,1,6,3],2,3);
//Outpul: x10,2,6,1,3



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(swapNum,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
