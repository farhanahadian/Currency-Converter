import React,{ useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {Link} from 'react-router-dom';

function BTCConverter() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("btc");
  const [to, setTo] = useState("idr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      console.log(res.data[from])
      setInfo(res.data[from]);
    })
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])
    
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }
  
  return (
    <div className="App">
    <div className='split'>
    <div className="container">
      <div className='result-box'>
        <h1 className='result-text'>{output.toFixed(2)}</h1>
      </div>
      <div className='from-to-wrapper'>
        <div className='amount'>
        <div className="left">
          <h3 className='amount-label'>Amount</h3>
          <input type="text" 
            placeholder="Enter the amount"
            className='gradient-border' 
            onChange={(e) => setInput(e.target.value)} />
        </div>
        </div>
        <div className='from-to'>
          <div className="middle">
            <h3>From</h3>
            <span class="custom-dropdown">
            <Dropdown options={options} 
                      onChange={(e) => { setFrom(e.value) }}
            value={from} placeholder="From" />
            </span>
          </div>
          <div className="right">
            <h3>To</h3>
            <Dropdown options={options} 
                      onChange={(e) => {setTo(e.value)}} 
            value={to} placeholder="To" />
        </div>
        </div>
      </div>
    </div>
    <div className='button-warapper'>
      <Link to={'/'}>
      <button className='bordered-button'>Switch
      </button>
      </Link>
      <button className='gradient-button' onClick={()=>{convert()}}>Convert
      </button>
    </div>
    </div>      
  </div>
  );
}
  
export default BTCConverter;