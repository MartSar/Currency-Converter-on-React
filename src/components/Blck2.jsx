
import { useState } from "react";

export default function({currSign2, setCurrSign2, result, rate1,  rate2, setRate2, style2, setStyle2, data}){


  return(
    <div className="blck">

      <div className="currs">
          <div>
            <button className="btn hrn" onClick={() => {setCurrSign2("₴");setRate2(data.uah.rate) }}>Hrivnia</button>
            <button className="btn dlr" onClick={() => {setCurrSign2("$");setRate2(1)             }}>Dollar</button>
            <button className="btn eur" onClick={() => {setCurrSign2("€");setRate2(data.eur.rate) }}>Euro</button>
          </div>
          <div>
            <span className="currName">{currSign2}</span>
          </div>
      </div>

      <div className="input">
        <input type="number" value={((result * rate2) / rate1).toFixed(2)} readOnly/>
      </div> 

    </div>
  )
}