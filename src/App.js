import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [money, setMoney] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get("http://api.exchangeratesapi.io/v1/latest?access_key=e3765b65b88ee95d039f4f7fd507ec43&format=1");
      setMoney(response.data.rates);
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <div className="container">
      
      <div>
        <h1>Buy</h1>
        <p>CAD : {money.CAD - (2/100 * money.CAD)}</p>
        <p>CAD : {money.IDR - (2/100 * money.IDR)}</p>
        <p>CAD : {money.JPY - (2/100 * money.JPY)}</p>
        <p>CAD : {money.CHF - (2/100 * money.CHF)}</p>
        <p>CAD : {money.USD - (2/100 * money.USD)}</p>
      </div>

      <div>
        <h1>Rate Currency</h1>
        <p>CAD : {money.CAD}</p>
        <p>IDR : {money.IDR}</p>
        <p>JPY : {money.JPY}</p>
        <p>CHF : {money.CHF}</p>
        <p>USD : {money.USD}</p>
      </div>

      <div>
        <h1>Sell</h1>
        <p>CAD : {money.CAD + (2/100 * money.CAD)}</p>
        <p>CAD : {money.IDR + (2/100 * money.IDR)}</p>
        <p>CAD : {money.JPY + (2/100 * money.JPY)}</p>
        <p>CAD : {money.CHF + (2/100 * money.CHF)}</p>
        <p>CAD : {money.USD + (2/100 * money.USD)}</p>
      </div>
      {console.log(money)}

    </div>
    </>
  )
}

export default App
