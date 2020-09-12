import React from "react";

function Calculator() {
    return (
        <form>
            <div>
                <input type="number" placeholder="Amount" onChange={(event) => console.log(event.target.value)}/>
            </div>
            <div>
                <span>From:</span>
                <select onChange={(event) => console.log(event.target.value)}>
                    <option value="USD">USD</option>
                    <option value="PLN">PLN</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <div>
                <span>To:</span>
                <select onChange={(event) => console.log(event.target.value)}>
                    <option value="USD">USD</option>
                    <option value="PLN">PLN</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <div>
                <span>Result:</span>
            </div>
        </form>
        )
}

export default Calculator