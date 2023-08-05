import { useState } from "react";


export default function({currSign1, setCurrSign1, setResult, setRate1, data}){


  return (
    <div className="blck">

      <div className="currs">

          <div>
            <button className="btn hrn" onClick={() => {setCurrSign1("₴");setRate1(data.uah.rate) }}>Hrivnia</button>
            <button className="btn dlr" onClick={() => {setCurrSign1("$");setRate1(1)             }}>Dollar</button>
            <button className="btn eur" onClick={() => {setCurrSign1("€");setRate1(data.eur.rate) }}>Euro</button>
          </div>

          <div>
            <span className="currName">{currSign1}</span>
          </div>
        </div>


        <div className="input">
          <input type="number" onChange={(event) => {setResult(event.target.value)}}/>
        </div>

    </div>
  )
}