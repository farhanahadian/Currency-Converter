import './style.css';
import BTCConverter from './BTCConverter';
import IDRConverter from './IDRConverter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function converter() {
    return ( 
        <BrowserRouter>
            <div className="App">
            <div className="heading">
                <h1>Currency Converter</h1>
            </div>

            <Routes>
              <Route path='/BTCConverter' exact element={<BTCConverter />}></Route>
              <Route path='/' exact element={<IDRConverter />}></Route>
            </Routes>
        </div>
        </BrowserRouter>
     );
}

export default converter;