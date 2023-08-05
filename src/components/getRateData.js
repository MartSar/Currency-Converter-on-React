


import { useEffect, useState } from 'react';


export default function(){

  const [rate, setRate] = useState()
  
  useEffect(() => {
    fetch("http://www.floatrates.com/daily/usd.json")
      .then(stream => stream.json())
      .then(rate => setRate(rate))
  }, [])


  return rate
}


