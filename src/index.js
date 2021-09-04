import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cardlist from './components/Cardlist';
import Gambar from "./assets/images/image.jpg";
import Quotes from "./components/Quotes"
const quotes = "Disaat payung teduh ku dengar , disitu lah tugas-tugas terbabat abis";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Cardlist name="Aldy Sufriyanto" nim="21120118120021" kelompok="16" isNameBold image={Gambar}></Cardlist>
    <Quotes author="Jagoan Emak" quotes={quotes}></Quotes>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
