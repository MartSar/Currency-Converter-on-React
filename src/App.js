
// http://www.floatrates.com/daily/usd.json

import { useEffect, useState } from 'react';
import './App.css';


import Blck1 from './components/Blck1';
import Blck2 from './components/Blck2';
import getRateData from './components/getRateData';



function App() {

  const data = getRateData()

  const [currSign1, setCurrSign1] = useState("");
  const [currSign2, setCurrSign2] = useState("");

  const [rate1, setRate1] = useState(0)
  const [rate2, setRate2] = useState(0)

  const [result, setResult] = useState(0);


  return (
    <div className="App">
      <div className='Blocks'>

        <Blck1 currSign1={currSign1} setCurrSign1={setCurrSign1}
               setResult={setResult} data={data} 
               setRate1={setRate1}
        
        />

        <div className='line'></div>

        <Blck2 currSign2={currSign2} setCurrSign2={setCurrSign2}
                result={result}  data={data}
                rate1={rate1}
                rate2={rate2}  setRate2={setRate2}   
        />

      </div>
    </div>
  );
}

export default App;

