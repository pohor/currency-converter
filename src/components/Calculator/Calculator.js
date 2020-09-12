import React, { useState } from "react";

function Calculator() {
    const [amount, setAmount] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState("PLN");
    const [currencyTo, setCurrencyTo] = useState("USD");
    return (
        <form>
            <div>
                <input type="number" placeholder="Amount" onChange={
                    (event) => { setAmount(event.target.value) } }/>
            </div>
            <div>
                <span>From:</span>
                <select value={currencyFrom} onChange={(event) => setCurrencyFrom(event.target.value)}>
                    <option value="USD">USD</option>
                    <option value="PLN">PLN</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <div>
                <span>To:</span>
                <select value={currencyTo} onChange={(event) => setCurrencyTo(event.target.value)}>
                    <option value="USD">USD</option>
                    <option value="PLN">PLN</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <div>
                <span>Result: {amount} </span>
            </div>
        </form>
        )
}

export default Calculator