import React, { useState, useEffect } from "react";
import {Button} from "../Button";

function Select({ currency, setCurrency }) {
    const [currencies, setCurrencies] = useState([]);
// runs two requests - TODO
    useEffect(() => {
        fetch(`https://api.ratesapi.io/api/latest?base=${"PLN"}`)
            .then(response => response.json())
            .then(data => {
                setCurrencies(Object.keys(data.rates))
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    return (
        <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
            {currencies.map((elem, index) => {
                return <option key={elem + index} value={elem}>{elem}</option>
            })}
        </select>
    )
}

function Calculator() {
    const [result, setResult] = useState(0);
    const [amount, setAmount] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState("PLN");
    const [currencyTo, setCurrencyTo] = useState("USD");
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.ratesapi.io/api/latest?base=${currencyFrom}`)
            .then(response => response.json())
            .then(data => {
                setResult(amount * data.rates[currencyTo])
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="number" placeholder="Amount" onChange={
                    (event) => { setAmount(event.target.value) } }/>
            </div>
            <div>
                <span>From:</span>
                <Select currency={currencyFrom} setCurrency={setCurrencyFrom}/>
            </div>
            <div>
                <span>To:</span>
                <Select currency={currencyTo} setCurrency={setCurrencyTo}/>
            </div>
            <div>
                <span>Result: {result} </span>
            </div>
            <div>
                <Button type="submit">Send</Button>
            </div>
        </form>
        )
}

export default Calculator