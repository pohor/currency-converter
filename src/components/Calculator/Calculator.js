import React, { useState } from "react";

function Select({ currency, setCurrency }) {
    return (
        <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
        </select>
    )
}

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
                <Select currency={currencyFrom} setCurrency={setCurrencyFrom}/>
            </div>
            <div>
                <span>To:</span>
                <Select currency={currencyTo} setCurrency={setCurrencyTo}/>
            </div>
            <div>
                <span>Result: {amount} </span>
            </div>
        </form>
        )
}

export default Calculator